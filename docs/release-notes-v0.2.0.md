# Portable LLM Council v0.2.0 — Claude support

Adds Claude Code support, including local Code sessions in Claude Desktop. The package now provides seven harness adapters and 21 native role definitions around one shared council skill.

- Three Claude roles: advisor, reviewer, and chair, used for eleven separate worker runs.
- Fresh non-fork dispatch guidance, text-only worker configuration, model inheritance, and explicit isolation limits.
- Personal copy/symlink options and project installation instructions.
- Design rationale and updated validation documentation; existing council assignments and the other eighteen role files are unchanged.

Claude Code 2.1.261 strict format validation and independent structural checks passed. Live Claude discovery, effective tools/models, and a complete eleven-worker council remain untested. Cowork, ordinary Chat, and cloud deployment are outside the adapter's scope.

## Install or update

Follow the repository README for your harness. Existing users should back up and deliberately replace the shared skill to receive the Claude reference; fresh-install commands skip existing files. Install only the Claude roles if adding Claude support. No other harness's role files changed.

GitHub supplies the source ZIP and tar.gz automatically. This release does not change personal installations or include custom build assets.
