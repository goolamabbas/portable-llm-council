# Cursor execution notes

Select `council-advisor`, `council-reviewer`, and `council-chair` when available. Send the full relevant [assignment](subagents.md) in each invocation; the role files alone do not contain the five lenses or verdict structure. If custom roles are unavailable, use a suitable general subagent with the full assignment and the same boundaries. Do not substitute a specialized code-search worker for decision analysis.

Cursor starts subagents with fresh contexts. Resuming an agent restores its history. Create new reviewer instances; never resume an advisor into review. Workers share the checkout by default, so keep council answers and the mapping out of their file-reading tasks. [Cursor subagents](https://cursor.com/docs/subagents)

The supplied advisors and reviewers run in the background; collect all five final results before advancing each round. An acknowledgement or progress message is not a completed answer. The chair runs in the foreground. Use isolated batches if capacity requires them; do not bypass limits through nested delegation.

All three definitions request `model: inherit` and `readonly: true`. Read-only workers return text; the coordinator writes the report and transcript. Verify actual model use when exposed, since Cursor may substitute a model under plan or administrator restrictions. [Model configuration](https://cursor.com/docs/subagents#model-configuration)

Do not change the user's settings or move execution into the cloud merely to finish a council. If fresh workers cannot run, report the incomplete stage. Preview artifacts through an available viewer and provide their paths when a preview is unavailable.
