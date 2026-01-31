# Directives

This folder contains SOPs (Standard Operating Procedures) written in Markdown.

Each directive should define:
- **Goals** - What this directive accomplishes
- **Inputs** - What data/parameters are needed
- **Tools/Scripts** - Which execution scripts to use
- **Outputs** - What gets produced
- **Edge Cases** - Known issues and how to handle them

## Creating a New Directive

Create a new `.md` file following this template:

```markdown
# Directive: [Name]

## Goal
[What this accomplishes]

## Inputs
- [Input 1]
- [Input 2]

## Execution
1. Run `execution/script_name.py`
2. [Next step]

## Outputs
- [Output 1]

## Edge Cases
- [Known issue]: [How to handle]
```
