const fs = require('fs');
const moment = require('moment');

const today = moment().format('MM/DD/YYYY');

export default function() {

  const pkg = JSON.parse(fs.readFileSync('./package.json'));

  return `/**
    * ${pkg.name} v<%= ${pkg.version} %> -- ${today}
    *  Availity, LLC'
    */`;
}
