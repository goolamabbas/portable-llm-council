---
name: llm-council
description: "Run a five-advisor council with blind peer review for consequential decisions. Use when the user asks to council or pressure-test a meaningful choice; skip routine factual and writing tasks."
---

# LLM Council

Help the user examine a decision beyond the framing and assumptions in their question. Use five distinct perspectives, blind peer review, and a chair's synthesis. The goal is better judgment, not a vote or guaranteed correctness.

## Prepare

Frame a neutral decision brief from the user's question and relevant available context: objectives, options, constraints, stakes, facts, and unknowns. Gather context proportionately; ask when a missing detail would materially change the question. Keep evidence distinguishable from assumptions.

Read [subagent assignments](references/subagents.md) for the roles and their inputs. Use the current harness's available subagent tools. When dispatch, isolation, capacity, or role selection needs clarification, read only the matching adapter: [Codex](references/codex.md), [Cursor](references/cursor.md), [Command Code](references/commandcode.md), [Grok Build](references/grok-build.md), [OpenCode](references/opencode.md), or [Factory Droid](references/factory-droid.md). Identify the harness from the active environment, not the selected model. Other harnesses require capability verification before use.

## Run the council

1. **Independent perspectives.** Spawn five advisors, one per lens: Contrarian, First Principles Thinker, Expansionist, Outsider, and Executor. Give each the same brief and its assigned lens, without other answers or a preferred conclusion. Run concurrently where supported; isolated batches are acceptable.
2. **Blind peer review.** After all answers arrive, remove explicit author/role labels and shuffle them into Response A–E. Retain the mapping for the chair and transcript. Give five fresh reviewers the brief and anonymized answers, without the mapping or other reviews. Each identifies the strongest argument, the biggest blind spot, and what all five missed.
3. **Synthesis.** Give a separate chair the original question, brief, named answers, mapping, and reviews. Ask for agreement, disagreement, insights from review, a clear recommendation, and one concrete next step. The chair may favor a well-supported minority argument.

## Preserve what makes this useful

- Separate contexts matter more than simultaneous starts. Reviewers must not inherit an advisor's identity or the coordinator's preferred answer.
- Ask for direct, lens-specific analysis without invented evidence or forced disagreement. Shared-model agreement is not factual verification; anonymous labels cannot conceal every stylistic cue.
- Use available evidence. When a consequential factual claim needs checking, verify it through appropriate available tools or identify it as unresolved. Council discussion alone does not validate it.
- If delegation or isolation is unavailable, or a round cannot finish, report the limitation. Do not pass off one-agent roleplay or missing reviews as a completed council.

## Deliver

Save `council-report-{timestamp}.html` and `council-transcript-{timestamp}.md` in the requested directory, defaulting to the current project. Use matching, filesystem-safe timestamps and avoid overwriting past sessions.

The HTML report should make the question and verdict easy to scan, show actual agreement/disagreement, and offer collapsible advisor responses and review highlights. Keep it self-contained, readable, and escape inserted text. Preview it when supported.

The Markdown transcript records the original question, brief and sources, all returned answers and reviews, the revealed mapping, and full verdict. Include actual execution details and material gaps: completed rounds, batching, isolation limits, and models if known. Record returned analyses, not hidden internal reasoning.

Return the recommendation and links to both files. Check that the artifacts faithfully contain the completed council's output.
