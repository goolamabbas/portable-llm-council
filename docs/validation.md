# Validation status

This release separates documented compatibility from observed execution. Earlier harness references were researched on September 6, 2026. OpenCode documentation/source and Factory Droid documentation were inspected on September 7, 2026. Claude documentation and local CLI format validation were checked on the same date.

| Check | Status |
| --- | --- |
| Shared skill and 21 native role definitions | One SKILL.md in the package; each of seven harnesses has three roles. Claude adds a conditional reference without changing shared assignments or the prior 18 roles. |
| File formats and relative links | YAML/TOML parsing, local links, unchanged prior roles/assignments, and staging/package equality checked for v0.2.0. |
| Claude native format validation | Installed Claude Code 2.1.261 strict validator accepted disposable copies under conventional `.claude/agents/` and `.claude/skills/` paths. This is not live discovery or execution. |
| Command Code skill discovery | Confirmed in an earlier personal installation through its live skill listing. This is not proof of agent execution. |
| Grok Build skill and agent discovery | Confirmed in an earlier personal installation with `grok inspect`. This is not proof of effective permissions, model routing, or reviewer isolation. |
| Codex and Cursor installation | Previously copied and compared with staged files; no complete runtime validation record is bundled. |
| Complete 11-worker execution | No maintainer-run end-to-end test matrix is available. The package owner reports successful use, without a recorded harness/model/version matrix. |
| Model quality across families | Not benchmarked. |
| Remote/cloud installation and execution | Not tested. |

The adapter files describe documented behavior and known uncertainties. Discovery observations above occurred after some adapter notes were written; references saying runtime councils remain untested are still accurate. This packaging pass runs no model councils and changes no personal installation.

## Check a new environment

1. Confirm the intended skill and all three role definitions are discoverable, with no shadowing copies.
2. Inspect available dispatch tools and effective model and permission settings. Use the matching adapter notes.
3. Run five separate advisors. Collect final text from all five before anonymization.
4. Run five new reviewers with only the brief and shuffled answers. Check that identities, parent answers, and prior reviews did not leak into their inputs. Do not reuse advisor sessions.
5. Run one separate chair after every review completes.
6. Check both generated artifacts against actual results. Report batching, failures, missing results, model information, and isolation limits honestly.

Record the harness version and date when reporting a result. Successful discovery alone must not be reported as a successful council.

## Documentation sources

- [Codex skills](https://learn.chatgpt.com/docs/build-skills)
- [Cursor skills](https://cursor.com/docs/skills) and [subagents](https://cursor.com/docs/subagents)
- [Command Code skills](https://commandcode.ai/docs/skills), [agents](https://commandcode.ai/docs/agents), and [tools](https://commandcode.ai/docs/reference/tools)
- [Grok Build skills](https://docs.x.ai/build/features/skills-plugins-marketplaces) and [subagents](https://docs.x.ai/build/features/subagents)

The Grok adapter also links xAI's repository documentation for fuller lifecycle and schema details. Those documents track `main`, not a verified installed version. Website and repository documentation disagree on some built-in agent permissions; this package uses custom roles and does not depend on those built-ins.

## OpenCode adaptation — September 7, 2026

Native web search and retrieval supplied the evidence: [skills](https://opencode.ai/docs/skills/), [agents](https://opencode.ai/docs/agents/), [permissions](https://opencode.ai/docs/permissions/), [server](https://opencode.ai/docs/server/), [configuration schema](https://opencode.ai/config.json), and the upstream [task implementation](https://raw.githubusercontent.com/anomalyco/opencode/dev/packages/opencode/src/tool/task.ts). Native retrieval was sufficient; Exa and other connected providers were not used. No retrieval failure required substitution.

The supplied docs and current schema support the adapter's frontmatter. Source inspection supports fresh child sessions when `task_id` is omitted, foreground result collection, and experimental asynchronous completion. The source tracks `dev`; it is not evidence about an installed release. The separate [V2 docs](https://opencode.ai/v2/docs/agents) describe a different schema and dispatch interface, which this adapter does not cover.

At the OpenCode adaptation stage, static checks covered YAML/TOML parsing, the OpenCode frontmatter fields, resolving local Markdown links, exactly one skill and 15 roles in the package at that point, unchanged existing worker prompts and shared assignments, and byte equality of the requested staging/package copies. OpenCode discovery, effective merged permissions/models, reviewer isolation, parallel scheduling, full 11-worker execution, and remote operation remain untested. An OpenCode executable was found on PATH, but was not launched; no installation or personal configuration was changed.

Validation tooling: the skill-creator quick validator could not start because PyYAML is unavailable. No dependencies were installed. Ruby's YAML parser and Python's TOML parser plus direct metadata, preservation, copy-equality, and local-link checks passed. This is a static validation substitute, not a successful run of that validator. All newly added external documentation links were retrieved successfully; older external links were not re-audited.

## Factory Droid adaptation — September 7, 2026

Native search and retrieval successfully read [skills](https://docs.factory.ai/harness/skills), [subagents](https://docs.factory.ai/harness/subagents), [autonomy](https://docs.factory.ai/autonomy-and-safety/auto-run), [settings](https://docs.factory.ai/droid-cli/settings), [security](https://docs.factory.ai/enterprise/security), and [remote computers](https://docs.factory.ai/droid-computers/overview). Native retrieval was sufficient; no Exa or other provider fallback was used and no retrieval failure required substitution.

See the [Droid reference](../llm-council/references/factory-droid.md) for discovery, lifecycle, models, and tool boundaries. The empty optional-tool list is an adapter choice based on the documented array format, not a live-tested validator result. The role prompts derive from the shared advisor, reviewer, and chair input/output requirements. They restrict additional context and skill loading without banning task tracking. Foreground and background execution are equally acceptable when round barriers hold. These choices do not change council methodology or guarantee runtime isolation.

Static validation covers YAML/TOML parsing, documented field shapes, unchanged prior roles and assignments, one skill/18 roles, staging-to-package equality, and local links. Runtime discovery, acceptance of the empty list, actual tools/models, fresh-review isolation, parallel completion, 11-worker execution, and remote behavior remain untested. No Droid process or personal installation was changed. Validation uses Ruby YAML and Python TOML/direct checks; the skill-creator quick validator remains unavailable without PyYAML. No dependency was installed. Newly added external links were retrieved; older external links were not re-audited.

## Claude adaptation — September 7, 2026

Native web retrieval successfully read Anthropic's [subagents](https://code.claude.com/docs/en/sub-agents), [skills](https://code.claude.com/docs/en/skills), [Desktop](https://code.claude.com/docs/en/desktop), and [empty-tool behavior](https://code.claude.com/docs/en/errors#agent-would-be-spawned-with-zero-tools) documentation. The available provider surface was inspected; no specialized external dataset was needed. No provider fallback or failed documentation retrieval contributed to this adapter.

The installed Claude Code CLI reported version 2.1.261. Its strict validator rejected the package's arbitrary source directory names as missing plugin manifests; no plugin manifest was added. Disposable copies under conventional `.claude/agents/` and `.claude/skills/` directories passed. An invalid control file made strict validation fail, confirming that the validator inspected the directory; the control was removed. These are format checks, not a model run or a personal installation.

Ruby YAML and Python TOML/direct checks cover metadata, exactly one skill and 21 roles, unchanged prior roles and shared assignments, local links, and staging/package equality. The skill-creator Python validator could not start because PyYAML is unavailable; no dependency was installed. Claude CLI checks and independent parsing are the recorded substitutes.

Claude live discovery, effective empty-tool enforcement and model routing, ambient-instruction isolation, five-advisor/five-reviewer/chair execution, artifact quality, and remote operation remain untested. No model council was launched, and no personal installation was changed. The release provides a documented adapter, not an end-to-end compatibility certification.
