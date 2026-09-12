# Command Code execution notes

Use only in Command Code. This adapter preserves the shared [assignments](subagents.md) and round structure.

Select registered `council-advisor`, `council-reviewer`, and `council-chair` through `agent` using `subagent_type`, a short `description`, and a self-contained `prompt`. Inspect the live schema first. If roles are missing, report the setup gap; do not silently fall back to the unrestricted General agent. [Tool reference](https://commandcode.ai/docs/reference/tools)

Send the complete relevant assignment and inputs each time. Create five separate advisor runs, then five new reviewer runs, then a separate chair. Parallel calls are documented; batch if capacity requires it. Do not assume a fixed concurrency limit. Never weaken the round barriers to fit capacity.

Advisors and reviewers request `background: true`; retain every returned `agent_id`. Collect final results with `agent_output` (`agent_id`, `action: wait`), or poll with `action: status`. An ID or status alone is not an answer. Parent interruption stops a wait without stopping the worker; inspect outstanding runs before retrying. The chair requests foreground execution. Recover outstanding results through the supported lifecycle before declaring a failed or missing result an incomplete round; report a blocker when recovery is unavailable. [Completion handling](https://commandcode.ai/docs/reference/tools)

The docs describe separate contexts, but do not specify all parent-history inheritance details. Use new invocations and only the prescribed inputs; verify reviewer isolation in the active runtime before claiming blind review. If unsupplied parent history, identities, or prior reviews are inherited, report reduced isolation; if fresh reviewers cannot be obtained, report the stage incomplete. [Custom agents](https://commandcode.ai/docs/agents)

These files deliberately omit `tools`: Command Code documents that as granting none. Workers return text; the coordinator gathers evidence and writes artifacts. This implements the existing supplied-input boundary without Cursor-only `readonly` or `is_background` keys. Models inherit via `model: inherit`; pin a supported `/model` ID only when requested. Omitted `reasoningEffort` uses the model default, not necessarily the session effort. Leave `permissionMode` unset to inherit session policy. [Agent settings](https://commandcode.ai/docs/agents)

Subagents retain deny rules and plan restrictions; safety-sensitive actions fail closed when approval would be needed. This is not an OS sandbox guarantee. Do not change permissions to complete a council. The coordinator still needs permission to save artifacts. [Permissions](https://commandcode.ai/docs/permissions)

Keep execution on the requested host. Remote/SSH IDE support does not establish automatic transfer of these files; verify discovery on that host separately. Local file operation also does not imply offline inference: provider API requests use the network. [IDE integration](https://commandcode.ai/docs/ide-integration), [network access](https://commandcode.ai/docs/resources/security#network-access)
