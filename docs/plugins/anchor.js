// Reference:
//
//  https://github.com/nodejs/nodejs.org/blob/bbdb787a1fb2b0e67341d0f68f33bd0631616375/scripts/plugins/anchor-markdown-headings.js
//
export default function anchorMarkdownHeadings(text, level, raw) {

  var escapedText = raw
    .replace(/(\[([^\]]+)\]\([^)]+\))/g, '$2')
    .replace(/[^\w]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/(^-|-$)/g, '')
    .toLowerCase();

  return  `
    <h${level}> ${text}
      <a name="${escapedText}" class="anchor" href="#${escapedText}"></a>
    </h${level}>
    `;
}
