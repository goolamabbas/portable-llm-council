# Project-only installation

Choose project installation when the council should be available in one repository, or when you want teammates to receive the same definitions through version control. Personal installation makes it available across your projects on that machine. Project scope controls discovery; it is not a sandbox, an offline mode, or a change to the council method.

Copy the complete shared `llm-council/` folder, including references, into the skill destination below. Copy only the three native role files for the harness you use into its agent destination. Paths are relative to the **target project's root**, not the downloaded package directory.

| Harness | Skill destination | Agent destination | Source role files in this package |
| --- | --- | --- | --- |
| Codex | `.agents/skills/llm-council/` | `.codex/agents/` | `codex-llm-council/codex-subagents/*.toml` |
| Cursor | `.agents/skills/llm-council/` | `.cursor/agents/` | `cursor-llm-council/cursor-subagents/*.md` |
| Command Code | `.agents/skills/llm-council/` | `.commandcode/agents/` | `commandcode-llm-council/commandcode-subagents/*.md` |
| Grok Build | `.grok/skills/llm-council/` | `.grok/agents/` | `grok-llm-council/grok-subagents/*.md` |
| OpenCode | `.agents/skills/llm-council/` | `.opencode/agents/` | `opencode-llm-council/opencode-subagents/*.md` |
| Factory Droid | `.agents/skills/llm-council/` | `.factory/droids/` | `droid-llm-council/droid-subagents/*.md` |

For example, from the downloaded package root, install for Factory Droid into your chosen project:

```bash
council_project="/absolute/path/to/your-project"
mkdir -p "$council_project/.agents/skills" "$council_project/.factory/droids"
cp -R -n llm-council "$council_project/.agents/skills/"
cp -n droid-llm-council/droid-subagents/*.md "$council_project/.factory/droids/"
```

Use the corresponding destinations and role files from the table for another harness. `-n` skips existing files; deliberately back up and replace older copies when updating. These are the same shared skill contents, not a separate methodology per harness. Grok's documented project skill location differs; if using it alongside another harness, keep any necessary deployed copies synchronized.

Start the harness in the target project and verify the resolved skill and all three roles. Existing personal definitions can still be discovered: project-only installation does not disable them. Avoid same-name copies where possible and inspect which definition is effective. In particular, Command Code documents personal agents loading before project agents with the first name winning, while Codex skills can both appear in selectors. Do not assume universal project precedence.

Commit these target-project files if teammates should receive them; each teammate still needs the appropriate harness, model access, and permissions. On remote hosts, containers, or separate worktrees, ensure the files exist and are discovered where execution actually happens. Merely placing them in a local project does not deploy them remotely.

The existing [harness execution notes](../README.md#supported-installations) still apply, including OpenCode's version boundary and Factory's mandatory tools. These locations are documentation-checked, not a new runtime validation of project installs.

## Official references

Checked September 7, 2026 using native retrieval; no provider fallback was needed.

- Codex: [skills](https://learn.chatgpt.com/docs/build-skills), [subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents).
- Cursor: [skills](https://cursor.com/docs/skills), [subagents](https://cursor.com/docs/subagents).
- Command Code: [skills](https://commandcode.ai/docs/skills), [agents](https://commandcode.ai/docs/agents).
- Grok Build: [skills](https://docs.x.ai/build/features/skills-plugins-marketplaces), [agent profiles and file locations](https://github.com/xai-org/grok-build/blob/main/crates/codegen/xai-grok-shell/README.md).
- OpenCode: [skills](https://opencode.ai/docs/skills/), [agents](https://opencode.ai/docs/agents/).
- Factory Droid: [skills](https://docs.factory.ai/harness/skills), [subagents](https://docs.factory.ai/harness/subagents).
