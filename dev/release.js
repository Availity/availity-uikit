import * as fs from 'fs';
import path from 'path';
import semver from 'semver';
import inquirer from 'inquirer';
import shell from 'shelljs';

import lint from './lint';
import clean from './clean';
import build from './build';

let VERSION = null;

function pkg() {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
}

// Preserver new line at the end of a file
// function possibleNewline(json) {
//   let lastChar = (json && json.slice(-1) === '\n') ? '\n' : '';
//   return lastChar;
// }

// https://github.com/stevelacy/gulp-bump/blob/dad1d960e9b1f6b480c909a23ba7d118c436ce6f/index.js#L83
// Figured out which "space" params to be used for JSON.stringfiy.
// function whitespace(json) {
//   let match = json.match(/^(?:(\t+)|( +))"/m);
//   let result = match[1] ? '\t' : match[2].length;
//   return match ? result : '';
// }

function bump() {

  return new Promise( (resolve, reject) => {

    if (!VERSION) {
      return reject(false);
    }

    var command = `npm version ${VERSION} -m "v${VERSION}"`;
    shell.exec(command, {async: true}, () => {
      return resolve(true);
    });

    // let json = pkg();
    // json = _.merge({}, json, {version: VERSION});
    // let spacing = whitespace(json);
    // let raw = JSON.stringify(json, null, spacing) + possibleNewline(json);

    // // update package.json
    // fs.writeFileSync(path.join(process.cwd(), 'package.json'), raw, 'utf8');


  });

}

function commit() {
  return new Promise( resolve => {
    return resolve(true);
  });
}

function tag() {
  return new Promise( resolve => {
    return resolve(true);
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

      return resolve(true);

    });

  });

}

export default function release() {

  return prompt()
    .then(lint)
    .then(clean)
    .then(bump)
    .then(build)
    .then(commit)
    .then(tag);

}
