# Portable LLM Council v0.3.0

The OpenCode adapter now requires OpenCode 2.x. Its advisor, reviewer, and chair use the V2 role format. The coordinator collects completed answers from background child sessions before starting the next round.

Run `opencode --version` on the host that will run the council. When upgrading, back up the shared skill and the three OpenCode role files, review local edits, and replace both the skill and the roles. Run `opencode debug agents` in the target project to verify that all three roles resolve. [Installation guide](https://goolamabbas.github.io/portable-llm-council/get-started/)

An end-to-end run on OpenCode 2.3.2 completed after one corrective reviewer round. All five replacement reviewers received the original advisor answers in their assigned order. The chair received those five reviews and returned its verdict.
