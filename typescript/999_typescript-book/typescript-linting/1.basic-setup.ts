/*
=>  Install Required Packages:
    npm install -D \
    eslint \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin \
    eslint-config-prettier \
    eslint-plugin-import \
    eslint-plugin-unused-imports

    // (Optional but recommended):
        npm install -D prettier
*/
/*
=> Minimal .eslintignore:
    node_modules
    dist
    build
    coverage
*/

/*
=>  Why These Rules Matter:
    @typescript-eslint/parser => Allows ESLint to understand TypeScript syntax.
    -   recommended-requiring-type-checking

=>  Catches:
    - Unsafe any
    - Promise misuse
    - Incorrect async handling

=>  Automatically removes:
    - Unused imports
    - Unused variables (cleaner code)
*/
// consistent-type-imports:
// Forces:
import type { User } from './types';
// Better tree-shaking & clarity.


//Scripts (package.json)
{
  "scripts": {
    // Runs ESLint on the entire project
    // Checks all .ts and .tsx files for code quality and potential errors
    "lint": "eslint . --ext .ts,.tsx",

    // Runs ESLint and automatically fixes problems where possible
    // Useful for quickly cleaning up formatting and minor rule violations
    "lint:fix": "eslint . --ext .ts,.tsx --fix"
  }
}

// Lint Config Variants
// For React (additions):
/*
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ]
*/
// for node:
/*
    env: { node: true }
    rules: {
    '@typescript-eslint/no-floating-promises': 'error'
    }
*/

/*
=>  Summary
    -> A good TypeScript lint setup:
        Prevents runtime bugs
        Enforces clean imports
        Works with Prettier
        Scales for large codebases
*/