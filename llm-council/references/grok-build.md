# Grok Build execution notes

## Discovery

Select `council-advisor`, `council-reviewer`, and `council-chair` only when registered. Send each complete [assignment](subagents.md#dispatch-templates-and-records); these short role files do not duplicate the methodology. [Discovery](https://docs.x.ai/build/features/skills-plugins-marketplaces)

## Dispatch, fresh context, and completion

The repository guide documents `spawn_subagent` with `subagent_type`, `prompt`, `description`, and `background`. Inspect the live schema rather than assuming this spelling on every release. Use new child sessions for each assignment, never `resume_from` or a conversation fork for blind reviewers. For background runs, retain IDs and retrieve final text with the documented `get_command_or_subagent_output`, using its live parameters. Collect all five answers before anonymizing, all five reviews before the chair, and the final verdict before saving completed-council artifacts. If recovery is impossible, follow the shared skill's incomplete-artifact instructions. Batch when capacity requires it. Report missing or truncated output as incomplete; status messages are not analyses. [Subagent guide](https://github.com/xai-org/grok-build/blob/main/crates/codegen/xai-grok-pager/docs/user-guide/16-subagents.md)

## Tool settings

The native Markdown/YAML definitions use `tools: Read` and `mcpInheritance: none`. Workers have read access and no inherited MCP tools. Workers must still use only supplied inputs and must not read council output files. Read access is not a filesystem isolation guarantee. Keep dispatch records outside worker access where supported; delaying new artifacts does not hide earlier files. The existing `Read` allowlist is retained: the inspected documentation does not establish empty-list behavior, so this package does not claim it is the minimum possible toolset. The coordinator alone gathers evidence and writes artifacts. Confirm the observable effective toolset, reusing current-session checks under the shared skill's rule. [Agent format](https://github.com/xai-org/grok-build/blob/main/crates/codegen/xai-grok-shell/README.md#agent-profiles), [MCP inheritance](https://github.com/xai-org/grok-build/blob/main/crates/codegen/xai-grok-pager/docs/user-guide/16-subagents.md#mcp-inheritance)

## Model settings

Omitting `model` requests the documented default of parent-model inheritance. A definition's model pin is supported, and existing per-type routing can override it. Do not add an unverified model alias or alter user configuration to force a model. No reasoning override is supplied; record effective settings if exposed. [Model routing](https://github.com/xai-org/grok-build/blob/main/crates/codegen/xai-grok-shell/README.md#subagents)

## Known limits

Subagents inherit permission mode, but the parent's plan mode does not edit-gate them. Skill `allowed-tools` does not enforce restrictions in Grok. Keep the explicit agent tool limits and existing permissions; do not enable always-approve. [Plan-mode boundary](https://docs.x.ai/build/features/plan-mode), [permissions and sandbox](https://docs.x.ai/build/features/permissions)

This targets Grok Build on the selected host, not ordinary Grok chat or the API's multi-agent feature. Local CLI and remote integrations need the package on the executing host; local files do not imply local model inference. Do not move execution or copy files remotely merely to finish. [CLI and integrations](https://docs.x.ai/build/overview)
