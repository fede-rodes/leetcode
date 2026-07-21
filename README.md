# LeetCode TypeScript

Local workspace for solving LeetCode problems in TypeScript.

## Structure

Each problem lives in its own folder:

```text
src/problems/<id>-<slug>/
  solution.ts       # your solution
  solution.test.ts  # local sample tests
```

Example: `src/problems/1-two-sum/`

## Adding a new problem

1. Create a folder under `src/problems/` (e.g. `42-trapping-rain-water/`).
2. Copy the LeetCode function signature into `solution.ts`.
3. Add sample test cases in `solution.test.ts`.

## Commands

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Type-check without emitting JS
npm run typecheck

# Run a solution file directly
npm run run src/problems/1-two-sum/solution.ts
```

## Workflow

1. Create the problem folder and write `solution.ts`.
2. Add test cases to `solution.test.ts`.
3. Run `npm test` until tests pass.
4. Submit on LeetCode.
