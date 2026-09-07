# Codex execution notes

Use native subagent tools and inspect their live schema. Do not create separate user-owned tasks as a substitute. This skill calls for delegation; active host permissions still apply.

- **Context:** Prefer fresh inputs. If the tool exposes `fork_turns`, use `"none"` and supply the assignment explicitly. Use the equivalent supported control elsewhere. If history is necessarily inherited, disclose the reduced isolation, especially for review.
- **Capacity:** Keep five advisors and five fresh reviewers, even when batching is necessary. Respect round barriers. Reclaim slots only through a supported lifecycle operation; idle or interrupted agents may still occupy capacity. If fresh workers cannot be created, report the incomplete round rather than recycling contaminated contexts or bypassing limits.
- **Shared files:** Separate conversations do not imply separate filesystem access. Workers should use their supplied inputs and return text; the coordinator alone writes the council artifacts.
- **Role selection:** Use `council_advisor`, `council_reviewer`, or `council_chair` only when registered and selectable. Otherwise send the full assignment directly to a generic subagent. Files on disk do not establish registration.
- **Settings:** Inherit model and reasoning settings unless the user requests otherwise. Do not edit global configuration to make a run possible. No subagent tools means this workflow is unavailable; there is no implicit single-agent simulation mode.

These are compatibility notes, not a universal tool-call recipe. Adapt dispatch to the current Codex surface. Ordinary ChatGPT and other harnesses are not tested targets of this version.
