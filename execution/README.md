# Execution Scripts

This folder contains deterministic Python scripts that handle the actual work.

## Guidelines

- **Reliable**: Scripts should be testable and produce consistent results
- **Well-commented**: Include docstrings and inline comments
- **Self-contained**: Each script handles one specific task
- **Error handling**: Include proper try/except blocks and clear error messages

## Script Template

```python
"""
Script: script_name.py
Purpose: [What this script does]

Inputs:
    - [Input 1]
    
Outputs:
    - [Output 1]
"""

import os
from dotenv import load_dotenv

load_dotenv()

def main():
    """Main entry point."""
    pass

if __name__ == "__main__":
    main()
```
