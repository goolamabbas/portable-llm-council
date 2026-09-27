# Claude execution notes

## Discovery

Use Claude Code, including local Code sessions in Claude Desktop. Personal locations are `~/.claude/skills/llm-council/` and `~/.claude/agents/`; project locations are `.claude/skills/llm-council/` and `.claude/agents/`. A skill-directory symlink can expose the shared installation. Verify effective role discovery; files on disk alone are insufficient.

## Dispatch

Keep the shared skill in the coordinating conversation. Select `council-advisor`, `council-reviewer`, or `council-chair` explicitly through `Agent` using `subagent_type` and the full [dispatch packet](subagents.md#dispatch-templates-and-records). Omit the call’s `name`: with interactive agent teams enabled, named spawns can become teammates with different boundaries. This does not mean removing `name` from the role definitions.

## Fresh context

Create separate non-fork instances for all eleven workers. Do not use `fork`, `context: fork`, or resume an advisor as a reviewer. Supplied definitions set `omitClaudeMd: true`, supported from v2.1.271. Current startup documentation includes project `AGENTS.md` in the instruction hierarchy this setting omits. Managed policy and environment context can still load; inspect observable inputs and disclose uncertainty. Older versions may ignore the setting.

## Completion

Interactive workers normally run in the background. Wait for final results: five advisor answers before review, five reviews before the chair, then the final verdict before completed artifacts. A notification or ID alone is not the result. Use supported recovery and isolated batches as needed; never bypass capacity through teams or nested delegation. Follow the shared incomplete-artifact rule when recovery is impossible.

## Tool and model settings

Definitions use `model: inherit`, `tools: []`, and no memory or preloaded skills. An intentionally empty tool list launches without tools; the zero-tools refusal concerns non-empty lists that resolve to nothing. Verify observable effective settings. The coordinator gathers evidence and writes artifacts.

## Known limits

Cowork, ordinary Chat, and cloud sessions are outside this installation scope. Verify discovery on the executing host. If custom roles are unavailable, a verified fresh general subagent may receive the full assignment only with the same input boundaries; disclose weaker tool limits. If fresh review inputs or completion cannot be established, report an incomplete stage.

Sources checked 2026-09-27: [subagents and frontmatter](https://code.claude.com/docs/en/sub-agents), [empty-tool distinction](https://code.claude.com/docs/en/errors#agent-would-be-spawned-with-zero-tools), [skills](https://code.claude.com/docs/en/skills), [Desktop scope](https://code.claude.com/docs/en/desktop). Documentation checks do not establish runtime enforcement.
