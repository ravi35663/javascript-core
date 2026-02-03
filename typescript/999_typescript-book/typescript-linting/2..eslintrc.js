// Basic .eslintrc.js (Recommended Setup):
module.exports = {
  // Marks this config as the root ESLint config
  // Prevents ESLint from searching for configs in parent folders
  root: true,

  // Defines environments so ESLint knows which global variables exist
  env: {
    node: true,        // Enables Node.js global variables (process, __dirname, etc.)
    es2022: true,      // Enables modern ES2022 syntax support
    browser: true,     // Enables browser globals (window, document, etc.)
  },

  // Uses TypeScript parser instead of default ESLint parser
  // Allows ESLint to understand TypeScript syntax
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',     // Allows latest ECMAScript features
    sourceType: 'module',      // Enables ES Modules (import/export)
    project: './tsconfig.json',// Enables type-aware linting using TypeScript type info
  },

  // Plugins add extra rules beyond ESLint core
  plugins: [
    '@typescript-eslint', // TypeScript-specific linting rules
    'import',             // Linting rules for ES module imports
    'unused-imports',     // Better handling & auto-removal of unused imports
  ],

  // Extends predefined rule sets to avoid writing rules from scratch
  extends: [
    'eslint:recommended', // Core ESLint best-practice rules
    'plugin:@typescript-eslint/recommended', // Recommended TS rules (no type checking)
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // TS rules that need type info
    'plugin:import/recommended', // Ensures valid import/export syntax
    'plugin:import/typescript',  // Improves import linting for TypeScript
    'prettier', // Disables formatting rules so Prettier controls formatting
  ],

  rules: {
    /* ----------------- TypeScript rules ----------------- */

    // Disabled because unused-imports plugin handles this better
    '@typescript-eslint/no-unused-vars': 'off',

    // Errors when imports are unused (keeps code clean)
    'unused-imports/no-unused-imports': 'error',

    // Enforces using `import type {}` for type-only imports
    // Improves tree-shaking and clarity
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],

    // Warns against using `any` to encourage strong typing
    '@typescript-eslint/no-explicit-any': 'warn',

    // Disabled to reduce verbosity for small/obvious functions
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Warns when using `!` (non-null assertion) as it can cause runtime errors
    '@typescript-eslint/no-non-null-assertion': 'warn',

    /* ----------------- General JavaScript rules ----------------- */

    // Warns when console statements are used (useful for production readiness)
    'no-console': 'warn',

    // Enforces strict equality (=== and !==) to avoid type coercion bugs
    'eqeqeq': ['error', 'always'],

    /* ----------------- Import rules ----------------- */

    // Enforces a clean, consistent import order
    'import/order': [
      'error',
      {
        // Groups imports logically
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],

        // Adds blank lines between import groups for readability
        'newlines-between': 'always',

        // Alphabetizes imports within groups
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },

  settings: {
    'import/resolver': {
      // Allows ESLint to resolve TypeScript path aliases and extensions
      typescript: {},
    },
  },
};
