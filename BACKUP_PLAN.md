# Backup & Rollback Plan

This document records the strategy for safely modifying the project. Every change is tracked, and every modified file can be reverted using the commands below.

## 1. Backup Strategy

### 1.1 Git-based rollback (primary)

The project is already under Git. Before any file is changed, the current working-tree state is the reference point. After each verified change, the working tree is left in a state that can be inspected, staged, or discarded with standard Git commands.

```bash
# Check current status
git status

# Revert a single file to its last committed/HEAD state
git checkout -- <file>

# Revert all uncommitted changes
git checkout -- .
```

### 1.2 Manual snapshot of changed files

Each modified file is listed in the table below with its purpose. The committed state on branch `update` is the baseline.

## 2. Rollback Commands

```bash
# Discard all uncommitted changes and return to the last committed state
git checkout -- .

# Clean any untracked files that were created during the maintenance pass
# (review before running)
git clean -fd
```

## 3. Change Log

| File | Reason for Change | How to Revert | Verification Command |
|------|-------------------|---------------|----------------------|
| `eslint.config.js` | Align ESLint flat config with Next.js 15 / ESLint 9 official recommendations | `git checkout -- eslint.config.js` | `npm run lint` |
| `package.json` | Remove duplicate/obsolete/unnecessary dependencies; align dependency versions | `git checkout -- package.json` | `npm run build` |
| `package-lock.json` | Regenerated after dependency changes | `git checkout -- package-lock.json` then `npm install` | `npm run build` |
| `tsconfig.json` | Clean obsolete options while keeping strict mode | `git checkout -- tsconfig.json` | `npm run build` |
| `next.config.ts` | Add safe production defaults if applicable | `git checkout -- next.config.ts` | `npm run build` |
| `src/**/*.tsx` / `src/**/*.ts` | Remove dead code/unused imports only | `git checkout -- <file>` | `npm run lint` |

## 4. Revert Criteria

A change will be immediately reverted if any of the following occur:

1. `npm run build` fails after the change.
2. `npm run lint` fails after the change and the failure is caused by the change.
3. A runtime error or warning is introduced that did not exist before.
4. The user-visible behavior of the website changes in any way.
5. A dependency conflict is created that breaks the install or build.

## 5. Safe State Commitment

No change will be left in place if it sacrifices a working production build to eliminate a non-critical warning. The existing website behavior, design, and functionality are preserved exactly.
