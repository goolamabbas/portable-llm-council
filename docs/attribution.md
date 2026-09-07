# Attribution and changes

## Origins

[Ole Lehmann's original X article](https://x.com/itsolelehmann/status/2038661433626333649), “How to finally trust Claude's advice (using Karpathy's LLM Council method),” describes a Claude-focused implementation using five thinking lenses, anonymous peer review, and a chairman synthesis. The article and its accompanying Claude-focused skill are the methodological sources for this adaptation.

Lehmann credits [Andrej Karpathy's LLM Council](https://github.com/karpathy/llm-council), which asks multiple models the same question, has them evaluate anonymized responses, and produces a chair's synthesis. This package follows the lens-based adaptation; it does not claim to reproduce Karpathy's multi-model application.

## Preserved methodology

- Five advisor lenses: Contrarian, First Principles Thinker, Expansionist, Outsider, and Executor.
- Independent advisor answers, shuffled anonymous answer labels, five fresh reviewers, and a separate chair.
- Review of argument strength, blind spots, and issues missed across the answers.
- A recommendation, concrete first step, HTML report, and Markdown transcript.

## Changes in this adaptation

- Replaced Claude-specific execution guidance with one shared skill and seven native adapters: Codex, Cursor, Command Code, Grok Build, OpenCode, Factory Droid, and Claude Code.
- Split the entrypoint, shared assignments, and conditional execution references so each harness reads only relevant instructions.
- Made fresh reviewer contexts, complete input handoffs, round barriers, completion collection, and capacity-aware batching explicit.
- Kept model selection in harness configuration and inherited defaults, with no dependency on one model family.
- Added a neutral decision brief and clearer evidence/assumption boundaries. The Contrarian need not invent a flaw, the Outsider receives the same decision facts, and reviewers need not manufacture an omission.
- Made the chair weigh reasoning over votes and preserve well-supported dissent. Removed claims that council agreement guarantees trustworthy or correct conclusions.
- Required reporting of incomplete rounds, isolation limits, known model settings, and unresolved evidence; retained both artifacts with safe, matching filenames.

The Claude adapter added in v0.2.0 follows this shared framework and its existing assignments; it does not restore the original Claude-specific implementation.

These are portability and reliability refinements, including the stated adjustments to lens wording. They preserve the council's three-stage structure.

## Source terms

The MIT license expresses Yusuf Goolamabbas's permission for his contributions. It does not relicense Lehmann's article, original skill, or any other third-party material. Neither the original article nor the historical original skill document is included in this release package.
