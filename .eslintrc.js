module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['next', 'plugin:import/recommended', 'plugin:import/typescript', 'prettier'],
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: ['tsconfig.json'],
            },
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'no-implicit-coercion': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                selector: 'variable',
                leadingUnderscore: 'allow',
            },
            { format: ['camelCase', 'PascalCase'], selector: 'function' },
            { format: ['PascalCase'], selector: 'interface' },
            { format: ['PascalCase'], selector: 'typeAlias' },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'prefer-const': 'error',
        'no-var': 'error',
        'import/no-duplicates': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-no-target-blank': 'error',
        'import/default': 'off',
        'react/jsx-key': 'off',
        '@next/next/no-html-link-for-pages': 'off',
    },
    ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', 'public', 'styles', '.next', 'coverage', 'dist', '.turbo'],
};
