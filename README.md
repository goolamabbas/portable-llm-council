# Portable LLM Council

One shared decision-making skill with native subagent definitions for **Codex, Cursor, Command Code, Grok Build, OpenCode, and Factory Droid**.

Five advisors examine a decision through different lenses, five fresh reviewers evaluate their anonymized answers, and a separate chair synthesizes a recommendation. The coordinator saves a self-contained HTML report and a Markdown transcript.

Adapted from [Ole Lehmann's Claude-focused council workflow](https://x.com/itsolelehmann/status/2038661433626333649), which draws on [Andrej Karpathy's LLM Council](https://github.com/karpathy/llm-council). This version preserves Lehmann's lens-based structure while separating the shared methodology from harness-specific execution. See [attribution and changes](docs/attribution.md).

## What this is for

Use it to pressure-test a consequential decision with real tradeoffs: product direction, pricing, hiring, positioning, or an implementation strategy. It is unnecessary for routine factual questions or simple writing tasks. A full run uses 11 workers, so prefer a direct answer or small experiment when either will settle the issue. See [when to use the council and example prompts](docs/when-to-use.md) for decision criteria, how much context to provide, and copyable examples.

```text
Use the llm-council skill to council this decision:
Should we launch a small paid pilot or finish the full product first?
Our objective is ..., our budget is ..., and the evidence so far is ...
```

## What the council looks for

Each advisor receives the same decision brief and examines it through one thinking lens. These are perspectives, not claims of professional expertise or independent factual knowledge.

| Advisor lens | What it looks for | Guiding question |
| --- | --- | --- |
| **Contrarian** | Fragile assumptions and ways the plan could fail, without inventing flaws | What could fail, and which assumption is most vulnerable? |
| **First Principles Thinker** | The underlying objective and whether the question is framed correctly | What are we actually trying to solve? |
| **Expansionist** | Overlooked upside and adjacent opportunities | What happens if this works better than expected? |
| **Outsider** | Jargon, unstated assumptions, and gaps that a fresh reader would notice | What would someone unfamiliar with this field find confusing or unconvincing? |
| **Executor** | Feasibility, dependencies, and a practical starting point | Can this be done, and what is the first step? |

After all five answers arrive, the coordinator removes explicit role labels and shuffles them into Responses A–E. **Five fresh reviewers** each receive the brief and all five anonymous answers, without the identity mapping or other reviews. They ask the same three questions:

1. Which response is strongest, and why?
2. Which response has the biggest blind spot, and what is missing?
3. What did all five responses miss that the council should consider?

Reviewers judge the arguments, not guessed identities, and need not invent an omission. A separate **chair** then receives the named answers and reviews, explains agreement and disagreement, and recommends a course of action and one concrete next step. Strong reasoning can outweigh the majority.

Five advisors means five separate instances of the advisor role; you install only three role definitions for the harness you use: advisor, reviewer, and chair. See the [shared assignments](llm-council/references/subagents.md) for the full inputs and response requirements.

## Supported installations

The commands below install for your user account across projects. For availability within one repository, copy the skill and your harness's three roles into that project instead. See [project-only installation](docs/project-installation.md) for all six directory mappings and an example. Neither scope requires installing the other harnesses.

| Harness | Personal skill directory | Personal agent directory | Execution details |
| --- | --- | --- | --- |
| Codex | `~/.agents/skills/llm-council/` | `~/.codex/agents/` | [Codex notes](llm-council/references/codex.md) |
| Cursor | Same shared directory | `~/.cursor/agents/` | [Cursor notes](llm-council/references/cursor.md) |
| Command Code | Same shared directory | `~/.commandcode/agents/` | [Command Code notes](llm-council/references/commandcode.md) |
| Grok Build | Same shared directory | `~/.grok/agents/` | [Grok Build notes](llm-council/references/grok-build.md) |
| OpenCode | Same shared directory | `~/.config/opencode/agents/` | [OpenCode notes](llm-council/references/opencode.md) |
| Factory Droid | Same shared directory | `~/.factory/droids/` | [Droid notes](llm-council/references/factory-droid.md) |

These are specific adapter targets, not a promise of universal harness compatibility. Claude Code, Claude Cowork, ordinary ChatGPT, and ordinary Grok chat are not supported installation targets in this release. Claude support is not required to use the six supplied adapters.

### Install the shared skill once

Download GitHub’s automatic “Source code (zip)” asset from a release and extract it, or clone this repository. Open a terminal in the extracted repository directory. The following examples use a macOS/Linux shell.

```bash
mkdir -p "$HOME/.agents/skills"
cp -R -n llm-council "$HOME/.agents/skills/"
```

Copy the entire folder, including its references. The `-n` option skips existing files. For an existing installation, back up and replace the old `llm-council` folder deliberately; these fresh-install commands do not update existing files. Avoid duplicate copies in other skill discovery locations that could shadow this one.

### Install the agents for each harness you use

Run only the applicable blocks. Check for existing same-named agents before installing; the examples skip them instead of replacing them.

**Codex**

```bash
mkdir -p "$HOME/.codex/agents"
cp -n codex-llm-council/codex-subagents/*.toml "$HOME/.codex/agents/"
```

**Cursor**

```bash
mkdir -p "$HOME/.cursor/agents"
cp -n cursor-llm-council/cursor-subagents/*.md "$HOME/.cursor/agents/"
```

**Command Code**

```bash
mkdir -p "$HOME/.commandcode/agents"
cp -n commandcode-llm-council/commandcode-subagents/*.md "$HOME/.commandcode/agents/"
```

**Grok Build**

```bash
mkdir -p "$HOME/.grok/agents"
cp -n grok-llm-council/grok-subagents/*.md "$HOME/.grok/agents/"
```

**OpenCode**

```bash
mkdir -p "$HOME/.config/opencode/agents"
cp -n opencode-llm-council/opencode-subagents/*.md "$HOME/.config/opencode/agents/"
```

OpenCode uses the shared skill directory. If its global config location is customized, use the resolved directory.

This adapter targets the `permission` / `task` interface documented at the supplied `/docs/` URLs. The separate V2 documentation uses a different agent schema; inspect your version before installation. Workers request no tool access; the coordinating primary agent must load the shared assignments and supply complete inputs. See [execution and version limits](llm-council/references/opencode.md). These instructions are for later installation; preparing this package does not install it.

**Factory Droid**

```bash
mkdir -p "$HOME/.factory/droids"
cp -n droid-llm-council/droid-subagents/*.md "$HOME/.factory/droids/"
```

Factory Droid uses the shared skill directory. Check `/skills` and `/droids` for the effective definitions after installation.

The adapter requests analysis from supplied inputs and documents Factory's mandatory-tool limitation. Check [Droid execution notes](llm-council/references/factory-droid.md) before running. Installation commands are provided for later use; the package preparation does not execute them.

Restart the harness or start a new session, then verify that it discovers the intended skill and all three native roles. Files on disk alone do not establish registration. The optional `llm-council/agents/openai.yaml` provides Codex presentation metadata; it is not a worker definition.

For remote sessions, install on the host actually executing the agents and verify discovery there. This package does not automatically transfer personal files to remote or cloud environments. Local execution may still use a remote model API.

## Models and execution requirements

No GPT-6 Astra dependency or other model pin is included. Definitions inherit the parent model through each harness's supported configuration. Actual model routing, reasoning settings, and permissions can depend on the harness and account; consult the execution notes and record the effective settings when available.

Use a model that can follow a complete assignment, distinguish evidence from assumptions, evaluate competing arguments, and preserve uncertainty. The coordinator also needs reliable multi-step orchestration and artifact generation. There is no benchmark-backed minimum model size or guarantee that every open-weight model performs equally well.

The full workflow requires **11 separate worker runs**: five advisors, five fresh reviewers, and one chair. Isolated batches are acceptable when concurrency is limited. Reviewers must not receive advisor identities, other reviews, or contaminated conversation history. If the harness cannot provide the necessary delegation and isolation, the skill reports an incomplete run.

Different lenses provide different perspectives, not independent sources of truth. Agreement does not verify facts. The coordinator should check consequential claims or label them unresolved. More worker calls also mean more tokens and potentially more time and cost than a single answer.

## Verify your installation

Start with this request:

```text
Check whether you discover the llm-council skill and the three council roles
for this harness. Report the resolved locations and effective model settings
if available. Do not run a council yet.
```

Then run a small decision through the council. Check for five advisor answers, five fresh reviews, one verdict, and both saved artifacts. Discovery, permission enforcement, model resolution, reviewer isolation, and complete execution are separate checks. See [validation status](docs/validation.md) for what has and has not been established.

## Package layout

- `llm-council/`: the sole maintained skill, shared assignments, conditional execution references, and optional Codex metadata.
- `*-llm-council/*-subagents/`: three native agent definitions for each of the six harnesses.
- `docs/`: usage guidance, attribution, validation status, and release notes.

Contributions should preserve one shared methodology and keep harness-specific behavior in adapters. For compatibility reports, include harness version, model, which rounds completed, and any isolation or permission limitations. Remove private decision content before sharing transcripts.

## License and credits

MIT for Yusuf Goolamabbas's contributions; see [LICENSE](LICENSE) and [attribution and source terms](docs/attribution.md). The upstream article and historical original skill are linked, not bundled. No affiliation with or endorsement by the original authors or harness vendors is implied.
