# Claude support: design and scope

Claude uses the same council method as every other adapter: five advisor instances, five fresh blind reviewers, one separate chair, and coordinator-written HTML and Markdown artifacts. The assignments remain in the shared skill. Three native role files select the worker behavior; they do not duplicate the council method.

## Why one SKILL.md

The entrypoint stays portable. Claude-specific dispatch and isolation guidance lives in a conditional reference, and installation puts the complete shared skill in Claude's discovery location. A copy or directory symlink changes discovery, not methodology. Maintaining a second entrypoint would create another version to keep synchronized.

## Worker boundaries

The coordinator passes each worker its complete assignment and required inputs. It gathers evidence, anonymizes answers, retains the identity mapping, collects final results, and creates the artifacts. Workers return text. The supplied definitions request `model: inherit` and `tools: []`; they configure no persistent memory, preloaded skills, hooks, or permission bypasses.

Use fresh custom instances, never conversation forks or resumed advisors for review. An isolated checkout alone would not establish blind review. Relevant ambient instructions must also be checked for information that would reveal identities or bias the verdict. These are implementation choices preserving the existing method, not additional council stages. See the [Claude execution reference](../llm-council/references/claude.md) for documented behavior and runtime checks.

## Supported surface

This adapter targets Claude Code and local Code sessions in Claude Desktop. Cowork, ordinary Chat, and cloud deployment are outside this release's scope. Sharing a product name or supporting uploaded skills does not by itself establish custom-agent discovery and reviewer isolation. See [Desktop documentation](https://code.claude.com/docs/en/desktop) and [skill loading](https://code.claude.com/docs/en/skills).

## Validation boundary

Native-format checks are useful but do not prove a successful council. Discovery, effective tools/models, fresh-review inputs, all eleven completed workers, and faithful artifacts must still be checked in a running Claude session. See [validation status](validation.md).
