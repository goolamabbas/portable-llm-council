import { readFileSync, copyFileSync, mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, '_site');
const example = 'examples/commercial-laundry/';
const read = path => readFileSync(resolve(root, path), 'utf8');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const write = (path, text) => { const target = resolve(output, path); mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, text); };
const transcript = read(example + 'council-transcript-20260928T231041Z.md');
const readme = read('README.md');
const scenario = read(example + 'decision-brief.md');

// Extract only explicitly labeled returned text, never repeated answers in packets.
const returns = [...transcript.matchAll(/````text\n([\s\S]*?)\n````/g)]
  .filter(m => /return/i.test(transcript.slice(Math.max(0, m.index - 170), m.index)))
  .map(m => m[1]);
if (returns.length !== 12) throw new Error('Expected five advisors, five reviews, two chair attempts');

function promptStarting(prefix) {
  const blocks = [...readme.matchAll(/```text\n([\s\S]*?)\n```/g)].map(match => match[1]);
  const found = blocks.filter(block => block.startsWith(prefix));
  if (found.length !== 1) throw new Error('Expected one README prompt: ' + prefix);
  return found[0];
}

const replacements = {
  SCENARIO: escape(scenario),
  INSTALL_PROMPT: escape(promptStarting('Read the installation instructions at')),
  DISCOVERY_PROMPT: escape(promptStarting('Check whether you discover the llm-council skill')),
  ...Object.fromEntries([...returns.slice(0, 10), returns[11]].map((text, i) => ['ANSWER_' + i, escape(text)]))
};
for (const path of ['index.html', 'sample/index.html', 'get-started/index.html']) {
  const html = read('site/templates/' + path).replace(/\{\{([A-Z_0-9]+)\}\}/g, (_, token) => {
    if (!(token in replacements)) throw new Error('Unknown template token: ' + token);
    return replacements[token];
  });
  if (/\{\{[A-Z_0-9]+\}\}/.test(html)) throw new Error('Unresolved template');
  write(path, html);
}
mkdirSync(resolve(output, 'assets'), { recursive: true });
for (const filename of readdirSync(resolve(root, 'site/assets'))) copyFileSync(resolve(root, 'site/assets', filename), resolve(output, 'assets', filename));
copyFileSync(resolve(root, example, 'council-report-20260928T231041Z.html'), resolve(output, 'sample/original-report.html'));
write('sample/transcript.md', transcript);
write('sample/publication-review.md', read(example + 'publication-review.md'));
write('sample/decision-brief.md', scenario);
write('.nojekyll', '');
console.log('Built three pages from repository sources into _site/.');
