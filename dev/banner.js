'use strict';

const fs = require('fs');
const moment = require('moment');

const today = moment().format('MM/DD/YYYY');

function banner() {

  const pkg = JSON.parse(fs.readFileSync('./package.json'));

  const elBanner = `
${pkg.name} v${pkg.version} (${today})
(c) Availity, LLC`;

  return elBanner;
}

module.exports = banner;
