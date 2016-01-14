import fs from 'fs';
import moment from 'moment';

const today = moment().format('MM/DD/YYYY');

export default function banner() {

  const pkg = JSON.parse(fs.readFileSync('./package.json'));

  let elBanner = `
${pkg.name} v${pkg.version} (${today})
(c) Availity, LLC`;

  return elBanner;
}
