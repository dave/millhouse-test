# Millhouse Test Repository

This repository contains test issues for testing [Millhouse](https://github.com/dave/millhouse), a tool that orchestrates parallel Claude Code instances to implement GitHub issues.

## Test Issues

| Issue | Title | Dependencies | Creates |
|-------|-------|--------------|---------|
| #1 | Add a greeting utility function | None | `src/utils/greeting.ts` |
| #2 | Add a math utility module | None | `src/utils/math.ts` |
| #3 | Add a string utility module | None | `src/utils/string.ts` |
| #4 | Create a calculator class | #2 | `src/calculator.ts` |
| #5 | Create a formatter module | #3 | `src/formatter.ts` |
| #6 | Create a welcome message generator | #1, #5 | `src/welcome.ts` |
| #7 | Create barrel export for utils | #1, #2, #3 | `src/utils/index.ts` |
| #8 | Create main entry point | #4, #6, #7 | `src/index.ts` |

## Dependency Graph

```
Level 0 (no dependencies - run in parallel):
┌─────────┐  ┌─────────┐  ┌─────────┐
│ #1      │  │ #2      │  │ #3      │
│ greeting│  │ math    │  │ string  │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     ├────────────┼────────────┤
     │            │            │
     ▼            ▼            ▼
Level 1 (unblocked after Level 0):
┌─────────┐  ┌─────────┐  ┌─────────┐
│ #7      │  │ #4      │  │ #5      │
│ barrel  │  │ calc    │  │ formatter│
│ (1,2,3) │  │ (2)     │  │ (3)     │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     │            │            ▼
     │            │       ┌─────────┐
     │            │       │ #6      │
     │            │       │ welcome │
     │            │       │ (1,5)   │
     │            │       └────┬────┘
     │            │            │
     ├────────────┼────────────┤
     │            │            │
     ▼            ▼            ▼
Level 2 (final):
          ┌─────────────┐
          │ #8          │
          │ main entry  │
          │ (4,6,7)     │
          └─────────────┘
```

## Execution Order

With default concurrency of 3:

| Step | Running | Waiting | Completed |
|------|---------|---------|-----------|
| 1 | #1, #2, #3 | #4, #5, #6, #7, #8 | - |
| 2 | #4, #5, #7 | #6, #8 | #1, #2, #3 |
| 3 | #6 | #8 | #1, #2, #3, #4, #5, #7 |
| 4 | #8 | - | #1, #2, #3, #4, #5, #6, #7 |
| Done | - | - | All |

Note: The exact order may vary depending on which issues complete first.

## Running the Test

```bash
# Clone this repo
git clone https://github.com/dave/millhouse-test
cd millhouse-test

# Run millhouse starting from issue #8
millhouse run --issue 8

# Or dry-run to see the plan without executing
millhouse run --issue 8 --dry-run
```

## Expected Result

After a successful run, the repository should have:

```
src/
├── utils/
│   ├── greeting.ts    # from #1
│   ├── math.ts        # from #2
│   ├── string.ts      # from #3
│   └── index.ts       # from #7
├── calculator.ts      # from #4
├── formatter.ts       # from #5
├── welcome.ts         # from #6
└── index.ts           # from #8
```
