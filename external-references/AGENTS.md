# EXTERNAL REFERENCES - SapphireJS Documentation

## OVERVIEW

Local copy of Sapphire framework documentation for offline reference. 91 markdown files covering Sapphire API and guides.

## WHERE TO LOOK

| Topic           | Entry Point                                                 |
| --------------- | ----------------------------------------------------------- |
| Getting Started | `sapphirejs-docs-markdown/General_Welcome.md`               |
| Commands        | `sapphirejs-docs-markdown/Guide_commands_*.md`              |
| Listeners       | `sapphirejs-docs-markdown/Guide_listeners_*.md`             |
| Preconditions   | `sapphirejs-docs-markdown/Guide_preconditions_*.md`         |
| Arguments       | `sapphirejs-docs-markdown/Guide_arguments_*.md`             |
| API Reference   | `sapphirejs-docs-markdown/Documentation_api-framework_*.md` |

## STRUCTURE

```
sapphirejs-docs-markdown/
├── General_Welcome.md                    # Start here
├── Guide_*/                              # Tutorials & how-tos
│   ├── getting-started_*.md
│   ├── commands_*.md
│   ├── listeners_*.md
│   ├── preconditions_*.md
│   ├── arguments_*.md
│   ├── plugins_*.md
│   └── utilities_*.md
└── Documentation_*/                      # API reference
    ├── api-framework_*.md                # Core framework classes
    ├── api-pieces_*.md                   # Piece system
    ├── api-utilities_*.md                # Utility functions
    └── api-shapeshift_*.md               # Validation library
```

## NOTES

- `sapphirejs-dev-docs-batch_scrape_results.json` contains raw scrape data
- Documentation follows Sapphire v5.x API
