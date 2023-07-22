module.exports = {
  plugins: ['import', 'prefer-arrow', 'prettier', 'sort-exports', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    eqeqeq: ['error', 'always'],
    'no-console': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-extra-boolean-cast': 'error',
    'no-magic-numbers': ['error', { ignoreArrayIndexes: true, ignore: [0, 1, 2, 3, 4, 5, 6, -1] }],
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'require-await': 'error',

    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'object', 'type', 'parent', 'sibling', 'index', 'internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
        'newlines-between': 'never',
      },
    ],

    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
      ],
      rules: {
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'function',
            format: ['PascalCase', 'camelCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        '@typescript-eslint/sort-type-constituents': 'warn',
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['index.ts'],
      rules: {
        'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.astro'],
    project: './tsconfig.json',
  },
};
