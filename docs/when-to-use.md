# When to use the council

Use the council when a decision has meaningful consequences and examining competing arguments could change what you do. You do not need a huge company or a particular budget. A week of scarce time can matter more than a large expense that is easy to reverse.

The full council uses 11 worker runs and asks you to read a synthesis. It costs more time and model usage than one response. These guidelines are practical heuristics, not a benchmark proving when the council outperforms a single assistant.

## Is it worth invoking?

A good candidate has three features:

- **Consequences:** getting it wrong would consume meaningful time, money, opportunity, or trust.
- **Tradeoffs:** plausible options serve different goals, or you suspect the framing itself is wrong.
- **Useful inputs:** you can describe your objective, constraints, and what you know well enough for specific analysis.

Skip it when a factual lookup, a direct edit, a short comparison, or a small reversible experiment will settle the question. If missing evidence is the main obstacle, gather that evidence first. Eleven analyses of the same unsupported assumption do not make it true.

| Request | Better starting point |
| --- | --- |
| Fix a typo, summarize an article, or explain a setting | One ordinary assistant response |
| Choose between two easily reversible button labels | Try a version or run a small test |
| Find whether a service supports a required feature | Check current documentation or test it |
| Choose a migration strategy with downtime, staffing, and rollback tradeoffs | Council after collecting the technical facts |
| Decide between a paid pilot and a full launch with limited runway | Council with customer evidence and capacity constraints |
| Decide something consequential but provide no objective or context | Clarify the decision and gather inputs first |

If unsure, ask for a scope check before invoking the skill:

```text
Help me decide whether this needs a full council, a single analysis,
or a small experiment. Do not run the council yet.
Decision: ...
Consequences of getting it wrong: ...
What I know and what remains uncertain: ...
```

## How much input is enough?

A few focused paragraphs can be enough. Aim to supply the following, rather than meeting a word count:

- The decision and intended outcome.
- The options you see, including doing nothing when relevant.
- Constraints: available time, budget, people, deadline, and reversibility.
- Evidence so far, with assumptions and unknowns labeled separately.
- What would make an option unacceptable or change your mind.

Attach relevant evidence when needed, but avoid a large unsorted dump. The coordinator can ask for missing details and prepare a common brief. More text is useful only when it changes the analysis. Do not invent numbers to fill the template.

## Example prompts

These are illustrative scenarios. Replace their facts with your own. Each invokes the full council, not a shortened substitute.

### Product scope

```text
Use the llm-council skill to evaluate whether we should run a paid pilot
or build the full product first.

Our goal is to find a repeatable customer problem within eight weeks.
We have two developers. Six prospective customers described the same
workflow problem, but none has committed to paying. A pilot would require
manual support; the full product would consume most of those eight weeks.
We cannot hire this quarter. Treat willingness to pay as unknown.
Evaluate the options, challenge the framing, and recommend one next step.
```

### Technical strategy

```text
Use the llm-council skill to evaluate an incremental migration versus
replacing our billing service in one cutover.

Our goal is to reduce maintenance without disrupting invoices. Two
engineers can work on this for six weeks. The attached assessment lists
the dependencies, incident history, and rollback options. The replacement
passed a prototype test, but production load behavior is unverified.
We cannot miss a billing cycle. Analyze the tradeoffs using the supplied
evidence and identify any check needed before committing.
```

### Allocation of a small team's time

```text
Use the llm-council skill to evaluate whether our next month should focus
on onboarding improvements or acquiring more trial users.

We want more retained paying customers. We have one engineer and one
founder available. The attached funnel data shows where trials stop,
and the interview notes distinguish observed issues from our guesses.
We can fund one substantial initiative this month. Attribution is weak,
so do not assume the interviews prove causation. Recommend a direction
and the first action that would test its key assumption.
```

## What to expect

Five advisor perspectives, five fresh anonymous reviews, and a chair's recommendation, with an HTML report and Markdown transcript. The useful output may be a reframed question or a decisive experiment rather than confidence in either original option.

Agreement is not verification. Consequential claims still need supporting evidence. The skill should disclose missing rounds or isolation limits instead of presenting an incomplete run as a full council.
