import * as fs from 'fs';
import path from 'path';
import semver from 'semver';
import inquirer from 'inquirer';
import nconf from 'nconf';
import {merge} from 'lodash';
import shell from 'shelljs';

import lint from './lint';
import clean from './clean';
import build from './build';

let VERSION = null;
let RAW = null;

function raw() {
  if (!RAW) {
    RAW = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8');
  }

  return RAW;
}

function pkg(contents) {
  return JSON.parse(contents || raw());
}

// Preserver new line at the end of a file
function newLine(contents) {
  let lastChar = (contents && contents.slice(-1) === '\n') ? '' : '\n';
  return contents + lastChar;
}

function bump() {

  return new Promise( (resolve, reject) => {

    if (!VERSION) {
      return reject(false);
    }

    let contents = raw();
    let json = pkg(contents);

    json = merge({}, json, {version: VERSION});

    contents = JSON.stringify(json, null, 2);
    contents = newLine(contents);

    // update package.json
    fs.writeFileSync(path.join(process.cwd(), 'package.json'), contents, 'utf8');

    resolve();


  });

}

function git() {

  return new Promise( resolve => {

    shell.exec('git add .');
    shell.exec(`git commit -m "v${VERSION}"`);
    shell.exec(`git tag -a v${VERSION} -m "v${VERSION}"`);

    const push = nconf.get('push');

    if (push) {
      shell.exec('git push', 'Push to remote');
      shell.exec('git push --tags', `Push new tag v${VERSION} to remote`);
    }

    resolve();

  });
}

export default function prompt() {

  let version = pkg().version;
  let parsed = semver.parse(version);

  // regular release
  let simpleVersion = `${parsed.major}.${parsed.minor}.${parsed.patch}`;
  let choices = [
    {name: `patch ( ${version} --> ${semver.inc(simpleVersion, 'patch')}`, value: semver.inc(simpleVersion, 'patch')},
    {name: `minor ( ${version} --> ${semver.inc(simpleVersion, 'minor')}`, value: semver.inc(simpleVersion, 'minor')},
    {name: `major ( ${version} --> ${semver.inc(simpleVersion, 'major')}`, value: semver.inc(simpleVersion, 'major')},
    new inquirer.Separator(),
    {name: 'other', value: 'other'}
  ];

  // pre-release
  if (parsed.prerelease && parsed.prerelease.length) {

    choices = [
      {name: `prerelease ( ${version} => ${semver.inc(version, 'prerelease', parsed[0])})`, value: semver.inc(version, 'prerelease', parsed[0])},
      {name: `release ( ${version} => ${simpleVersion})`, value: simpleVersion},
      new inquirer.Separator(),
      {name: 'other', value: 'other'}
    ];

  }

  let questions = [
    {
      type: 'rawlist',
      name: 'bump',
      message: `What type of version bump would you like to do?`,
      choices: choices
    },
    {
      type: 'input',
      name: 'version',
      message: `version (current version is ${pkg().version})`,
      when: function(answer) {
        return answer.bump === 'other';
      },
      filter: function(value) {
        return semver.clean(value);
      },
      validate: function(value) {

        var valid = semver.valid(value);

        if (valid) {
          return true;
        }

        return 'Enter valid semver version number.  Please see https://docs.npmjs.com/misc/semver for more details.';

      }

    }
  ];

  return new Promise( resolve => {

    inquirer.prompt(questions, function(answers) {

      VERSION = answers.bump !== 'other' ? answers.bump : answers.version;

      return resolve();

    });

  });

}

export default function release() {

  return prompt()
    .then(lint)
    .then(clean)
    .then(bump)
    .then(build)
    .then(git);

}
