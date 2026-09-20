import { readFileSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, '_site');
const example = 'examples/workshop-or-course/';
const read = path => readFileSync(resolve(root, path), 'utf8');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const write = (path, text) => { const target = resolve(output, path); mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, text); };
const transcript = read(example + 'council-transcript-20260920T213624+0800.md');
const readme = read('README.md');
const scenario = read(example + 'scenario.md');

function answer(name) {
  const marker = '### ' + name + '\n\n';
  const found = transcript.indexOf(marker);
  if (found < 0) throw new Error('Missing returned section: ' + name);
  const start = found + marker.length;
  const end = transcript.indexOf('\n##', start);
  return transcript.slice(start, end < 0 ? undefined : end).trim();
}

// The scenario uses only headings, paragraphs and unordered lists. Fail rather
// than silently reinterpret new Markdown constructs outside this small format.
function renderScenario(markdown) {
  return markdown.trim().split(/\n\s*\n/).map(block => {
    if (/^## /.test(block)) return '<h2>' + escape(block.slice(3)) + '</h2>';
    if (block.startsWith('- ')) {
      const lines = block.split('\n');
      if (lines.some(line => !line.startsWith('- '))) throw new Error('Unsupported scenario list');
      return '<ul>' + lines.map(line => '<li>' + escape(line.slice(2)) + '</li>').join('') + '</ul>';
    }
    if (/^(#|```|>)/.test(block)) throw new Error('Unsupported scenario Markdown');
    return '<p>' + escape(block).replaceAll('\n', ' ') + '</p>';
  }).join('\n');
}

function promptStarting(prefix) {
  const blocks = [...readme.matchAll(/```text\n([\s\S]*?)\n```/g)].map(match => match[1]);
  const found = blocks.filter(block => block.startsWith(prefix));
  if (found.length !== 1) throw new Error('Expected one README prompt: ' + prefix);
  return found[0];
}

const names = ['Contrarian', 'First Principles Thinker', 'Expansionist', 'Outsider', 'Executor',
  ...Array.from({length: 5}, (_, i) => 'Reviewer ' + (i + 1)),
  'Where the Council Agrees', 'Where the Council Clashes', 'Blind Spots the Council Caught', 'The Recommendation', 'The One Thing to Do First'];
const replacements = {
  SCENARIO: renderScenario(scenario),
  INSTALL_PROMPT: escape(promptStarting('Read the installation instructions at')),
  DISCOVERY_PROMPT: escape(promptStarting('Check whether you discover the llm-council skill')),
  ...Object.fromEntries(names.map((name, i) => ['ANSWER_' + i, escape(answer(name))]))
};
for (const path of ['index.html', 'sample/index.html', 'get-started/index.html']) {
  const html = read('site/templates/' + path).replace(/\{\{([A-Z_0-9]+)\}\}/g, (_, token) => {
    if (!(token in replacements)) throw new Error('Unknown template token: ' + token);
    return replacements[token];
  });
  if (/\{\{[A-Z_0-9]+\}\}/.test(html)) throw new Error('Unresolved template');
  write(path, html);
}
for (const filename of readdirSync(resolve(root, 'site/assets'))) write('assets/' + filename, read('site/assets/' + filename));
const briefMarker = '## Complete scenario and decision brief';
const sourceMarker = '### Sources and evidence boundary';
const briefStart = transcript.indexOf(briefMarker);
const sourceStart = transcript.indexOf(sourceMarker);
if (briefStart < 0 || sourceStart < briefStart) throw new Error('Transcript brief markers changed');
let publicTranscript = transcript.slice(0, briefStart) + '## Complete original scenario\n\n' + scenario.trim() + '\n\n' + transcript.slice(sourceStart);
publicTranscript = publicTranscript.replace('The exact anonymous packet supplied to every reviewer is preserved in the supporting execution record.', 'The anonymous packet is preserved in the execution record in the repository example folder.');
publicTranscript += '\n\n## Public reading copy\n\nThis derived copy includes the complete original scenario. Its final sentence was omitted from worker packets. Headings are formatted for reading; this is not a raw dispatch export. Consult the publication review in the repository example folder for limitations.\n';
write('sample/transcript.md', publicTranscript);
write('.nojekyll', '');
console.log('Built three pages from repository sources into _site/.');
