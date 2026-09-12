# Claude execution notes

Use this adapter for Claude Code, including local Code sessions in Claude Desktop. Keep the shared skill in the main coordinating conversation; do not add `context: fork` to its frontmatter or start the council as one of the worker roles. The coordinator needs delegation and artifact-writing capabilities.

Select `council-advisor`, `council-reviewer`, and `council-chair` explicitly through the available agent tool (`Agent` in current Claude Code). Send the full relevant [assignment](subagents.md) and its inputs each time. The role files are dispatch conveniences, not replacements for those assignments.

Create separate, non-fork instances for all eleven workers. Never use the `fork` type or resume an advisor as a reviewer. Claude documents fresh contexts for ordinary custom subagents, while forks inherit conversation history. Custom agents still receive `CLAUDE.md` instructions and environment context; inspect relevant instructions for council identities, prior reviews, or a preferred answer before claiming blind review. [Subagent behavior](https://code.claude.com/docs/en/sub-agents)

The supplied definitions use `model: inherit` and `tools: []`, with no persistent memory or preloaded skills. An explicitly empty tool list is documented to launch without tools. This is a supplied-input design: the coordinator gathers evidence and writes artifacts; workers return analysis. Verify observable effective tool/model settings, reusing current-session checks under the shared skill's rule. [Empty-tool behavior](https://code.claude.com/docs/en/errors#agent-would-be-spawned-with-zero-tools)

Foreground or background execution is acceptable. Collect five final advisor answers before anonymizing, five final reviews before starting the chair, and the chair's final verdict before writing completed-council artifacts. If recovery is impossible, follow the shared skill's incomplete-artifact instructions. A task identifier, acknowledgement, or progress update is not a completed result. Use isolated batches when capacity requires them; do not bypass limits through nested delegation or agent teams.

If custom roles are unavailable, use a verified fresh general subagent only when it can receive the complete assignment and preserve the same input boundaries. Disclose any weaker tool restrictions. If isolation or completion cannot be established, report the incomplete stage rather than using roleplay.

Personal discovery uses `~/.claude/skills/llm-council/` and `~/.claude/agents/`; project discovery uses `.claude/skills/llm-council/` and `.claude/agents/`. A skill-directory symlink can expose the existing shared skill. [Skills](https://code.claude.com/docs/en/skills)

The Desktop scope here is its local Code surface. Cowork and cloud sessions have different loading arrangements and are not covered by this adapter's installation instructions. On remote hosts, verify discovery where execution occurs. [Desktop](https://code.claude.com/docs/en/desktop)
