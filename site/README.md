# Website maintenance

The GitHub repository is the maintained source. `_site/` is generated, ignored output. GitHub Actions builds and deploys it when `main` changes; do not edit generated pages.

| Content | Maintained source |
| --- | --- |
| Installation and discovery prompts | Root `README.md` |
| Manual installation commands | Root `README.md`, linked from the site |
| Complete sample decision brief | `examples/commercial-laundry/decision-brief.md` |
| All returned sample analyses | Original transcript in `examples/commercial-laundry/` |
| Original report, execution record and audit | `examples/commercial-laundry/`, retained unchanged |
| Later qualifications | `examples/commercial-laundry/publication-review.md` |
| Public editorial summaries and layout | `site/templates/` |
| Original report served at `sample/original-report.html` | Byte-preserved copy of the original report |
| Report preview image | Screenshot of that original, not an editorial recreation |
| Styles and interactions | `site/assets/` |

The public summaries and short review notes are editorial derivatives; review them when the underlying material changes. Preserved records describe a historical run and should not be rewritten. Add a separate folder for any future run.

Build with Node.js (no packages required):

```sh
node site/build.mjs
python3 -m http.server 8765 --bind 127.0.0.1 --directory _site
```

Before publishing, check all three pages, the complete brief, disclosure controls, copied prompts, responsive layouts, local links, and that the returned response text matches the maintained transcript. Inspect changes for private paths or unrelated files. The build publishes only `_site/`; repository source material is available through GitHub links.

Assets are copied as bytes so PNG previews remain intact. Sharing metadata uses the final GitHub Pages URLs; preview rendering is checked locally, not on social networks. The featured sample uses the v0.2.6 assignment wording. Earlier workshop/course records remain unchanged in the repository.
