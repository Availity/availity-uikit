const config = require('../packages/uikit/fonts/config.json');

function convertCode(code) {
  const newString = code.toString(16);
  return '0000'.slice(0, Math.max(4 - newString.length, 0)) + newString;
}

function compareGlyph(a, b) {
  return a.code - b.code;
}

if (!config || !config.name || !Array.isArray(config.glyphs) || config.glyphs.length <= 0) {
  throw new Error('font config not found');
}

const { name, glyphs } = config;

const icons = glyphs
  .map(({ css, code }) => {
    if (css && code) {
      return { css, code };
    }
    return false;
  })
  .filter(val => !!val)
  .sort(compareGlyph)
  .map(({ css, code }) => {
    const baseCode = convertCode(code);
    return {
      icon: css,
      content: `\\${baseCode}`,
      unicode: `0x${baseCode}`,
    };
  });

module.exports = {
  name,
  prefix: config.css_prefix_text.replace(/-$/, ''),
  icons,
};
