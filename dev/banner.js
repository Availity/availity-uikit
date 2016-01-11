import fs from 'fs';
import moment from 'moment';

const today = moment().format('MM/DD/YYYY');

export default function banner() {

  const pkg = JSON.parse(fs.readFileSync('./package.json'));

  return `/**
    * ${pkg.name} v<%= ${pkg.version} %> -- ${today}
    *  Availity, LLC
    */`;
}
