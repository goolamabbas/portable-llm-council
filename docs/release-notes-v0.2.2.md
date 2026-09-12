# Portable LLM Council v0.2.2 — workflow refinements

This release refines when the council runs and how it handles missing context, interrupted work, and incomplete results.

- Narrow the trigger so quick critiques do not automatically start a full council.
- Ask for decisive missing information only when available context or an explicit conditional assumption cannot resolve it.
- Recover outstanding worker results through the supported lifecycle before declaring a round incomplete.
- Preserve returned work in both HTML and Markdown artifacts when recovery is impossible, clearly marked incomplete without inventing a verdict.
- Reuse capability checks within an unchanged session while retaining reviewer-input checks and disclosure of unverified settings.
- Clarify adapter-specific fallback boundaries and normal host approval handling without permitting policy bypasses.

The method remains five advisors, five fresh blind reviewers, and a separate chair. Both output formats remain required. Native agent definitions, model inheritance, and supported harness targets are unchanged.

**Updating:** Refresh the shared `llm-council` skill directory, including its references. Native agent files do not need replacement for this release.

**Validation:** Staging and repository copies match; local links, YAML frontmatter, and whitespace checks passed. No new live council or cross-harness runtime tests were performed for this update.
