'use strict';

const fs = require('fs');
const path = require('path');
const semver = require('semver');
const inquirer = require('inquirer');
const nconf = require('nconf');
const _ = require('lodash');
const shell = require('shelljs');

const lint = require('./lint');
const clean = require('./clean');
const build = require('./build');

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
  const lastChar = (contents && contents.slice(-1) === '\n') ? '' : '\n';
  return contents + lastChar;
}

function bump() {

  return new Promise( (resolve, reject) => {

    if (!VERSION) {
      return reject(false);
    }

    let contents = raw();
    let json = pkg(contents);

    json = _.merge({}, json, {version: VERSION});

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

function prompt() {

  const version = pkg().version;
  const parsed = semver.parse(version);

  // regular release
  const simpleVersion = `${parsed.major}.${parsed.minor}.${parsed.patch}`;
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

  const questions = [
    {
      type: 'rawlist',
      name: 'bump',
      message: 'What type of version bump would you like to do?',
      choices
    },
    {
      type: 'input',
      name: 'version',
      message: `version (current version is ${pkg().version})`,
      when(answer) {
        return answer.bump === 'other';
      },
      filter(value) {
        return semver.clean(value);
      },
      validate(value) {

        const valid = semver.valid(value);

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

function release() {

  return prompt()
    .then(lint)
    .then(clean)
    .then(bump)
    .then(build)
    .then(git);

}

module.exports = {
  prompt,
  release
};
