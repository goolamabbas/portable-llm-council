# OpenCode 2.x execution notes

Check `opencode --version` on the executing host. This adapter requires major version 2.

## Installation and discovery

Install the shared skill once in `~/.agents/skills/llm-council/` and the three Markdown role files in the OpenCode config directory’s `agents/` folder (normally `~/.config/opencode/agents/`). For project scope, use `.agents/skills/llm-council/` and `.opencode/agents/`. Run `opencode debug agents` in the target project to check that `council-advisor`, `council-reviewer` and `council-chair` resolve as subagents. Check skill discovery in a fresh session. If the client connects to a remote server, verify the files on the executing host.

## Workers and permissions

The coordinator loads the shared skill. The role filenames supply agent IDs and each body supplies its role instructions. The bundled roles omit a model preference so the children can inherit the parent's model. Record the observed settings when available. Each role requests a wildcard deny rule in its ordered `permissions` list. Check merged permissions when project overrides or plugins are present. The primary agent needs permission to launch the three roles and save the artifacts. Project instructions and other context can still reach workers. Follow the shared skill's guidance on ambient context and isolation.

## Dispatch and completion

Use the active V2 `subagent` tool. Launch a fresh child for each slot, select its named role and send its complete [assignment and input packet](subagents.md#dispatch-templates-and-records). Keep the mapping and other reviews out of reviewer inputs. Children run in the background. When a child goes idle, the parent receives a report. Match each report to its slot and collect the final answer. An idle event or progress message alone is insufficient.

Collect all five advisor answers before dispatching the five fresh reviewers. Collect all five reviews before dispatching the separate chair. If capacity is limited, use independent batches. For a missing result, use recovery supported by the active harness and the shared skill’s incomplete-run rules. Keep capture status and remaining uncertainties in the transcript.

Sources: [OpenCode 2.x agents](https://opencode.ai/v2/docs/agents) and [skill discovery](https://opencode.ai/v2/docs/skills).
