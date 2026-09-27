# Portable LLM Council v0.2.3

Council runs now use explicit dispatch templates and preserve the exact inputs sent to each worker. Reviewers receive complete, minimally anonymized answers in rotated order while answer identities remain fixed.

- Reinforce supplied-input boundaries across all 21 native role definitions.
- Request Claude Code instruction omission (v2.1.271+) and Codex read-only execution, with effective permissions and isolation still subject to runtime verification.
- Clarify adapter execution notes, shared-file exposure, and UTC artifact filenames.
- Improve the website introduction, navigation, installation journey, and sharing previews. Link the original example report unchanged and retain its limitations.

The five-advisor, five-reviewer, separate-chair structure is unchanged. The preserved example predates these refinements. Build, static checks, desktop/mobile layouts, links, and clipboard behavior were checked; the updated native definitions have not undergone a new cross-harness council run.
