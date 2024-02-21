/* eslint-disable unicorn/no-array-push-push */
/* eslint-disable unicorn/no-array-for-each */

const fs = require('fs');
const path = require('path');

const fontConfig = require('../utils/fontConfig');

const fontVariableLoc = path.resolve(__dirname, '../packages/uikit/scss/_icon_variables.scss');

const fontVariableOutput = [];

// main font variables
fontVariableOutput.push(`$availity-icon-font: '${fontConfig.name}';`);
fontVariableOutput.push(`$availity-css-prefix: '${fontConfig.prefix}';`);
fontVariableOutput.push(`$availity-font-timestamp: '${Date.now()}';`);

// add icons
fontVariableOutput.push('$availity-icons: (');
fontConfig.icons.forEach(icon => {
  fontVariableOutput.push(`  ${icon.icon}: '${icon.content}',`);
});
fontVariableOutput[fontVariableOutput.length - 1].replace(/,$/, '');
fontVariableOutput.push(');');

fs.writeFileSync(fontVariableLoc, fontVariableOutput.join('\n'));
