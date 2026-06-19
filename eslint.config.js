import stylistic from '@stylistic/eslint-plugin';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import { jsdoc } from 'eslint-plugin-jsdoc';
import vue from 'eslint-plugin-vue';

const controlStatements = [
    'if',
    'return',
    'for',
    'while',
    'do',
    'switch',
    'try',
    'throw',
];
const paddingAroundControl = [
    ...controlStatements.flatMap(stmt => [
        { blankLine: 'always', prev: '*', next: stmt },
        { blankLine: 'always', prev: stmt, next: '*' },
    ]),
];

export default defineConfigWithVueTs(
    vue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
        name: 'resources/js',
        files: ['**/*.{vue,js,mjs,jsx}'],
    },
    {
        plugins: {
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
                node: true,
            },
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                },
            ],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/consistent-type-specifier-style': [
                'error',
                'prefer-top-level',
            ],
        },
    },
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
            '@stylistic/padding-line-between-statements': [
                'error',
                ...paddingAroundControl,
            ],
        },
    },
    {
        ignores: [
            'vendor',
            'node_modules',
            'public',
            'bootstrap/ssr',
            'tailwind.config.js',
            'vite.config.ts',
            'resources/js/actions/**',
            'resources/js/components/ui/*',
            'resources/js/routes/**',
            'resources/js/wayfinder/**',
        ],
    },
    prettier,
    ...vue.configs['flat/base'],
    ...vue.configs['flat/essential'],
    ...vue.configs['flat/strongly-recommended'],
    ...vue.configs['flat/recommended'],

    stylistic.configs.recommended,
    {
        rules: {
            '@stylistic/indent': ['warn', 4, {
                ignoreComments: true,
            }],
            '@stylistic/semi': ['error', 'always'],
        },
    },

    // Vue
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/require-default-prop': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-closing-bracket-newline': ['warn', {
                singleline: 'never',
                multiline: 'never',
                selfClosingTag: {
                    singleline: 'never',
                    multiline: 'never',
                },
            }],

            'vue/max-attributes-per-line': ['warn', {
                singleline: { max: 4 },
                multiline: { max: 1 },
            }],

            'vue/html-self-closing': ['warn', {
                html: {
                    void: 'always',
                    normal: 'any',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            }],

            'vue/first-attribute-linebreak': [
                'error',
                {
                    singleline: 'beside',
                    multiline: 'beside',
                },
            ],
            'vue/padding-line-between-tags': ['warn', [
                {
                    blankLine: 'always',
                    prev: '*:single-line',
                    next: '*:multi-line',
                },
                {
                    blankLine: 'always',
                    prev: '*:multi-line',
                    next: '*',
                },
            ]],

            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 1,
                    alignAttributesVertically: true,
                    ignores: [],
                },
            ],
            'vue/multiline-html-element-content-newline': ['error', {
                ignoreWhenEmpty: true,
                allowEmptyLines: false,
            }],
            'vue/mustache-interpolation-spacing': ['warn', 'always'],
        },
    },

    // JSDoc
    jsdoc({
        config: 'flat/recommended',
        rules:
        {
            'jsdoc/require-jsdoc': ['off'],
            'jsdoc/require-param': ['error'],
            'jsdoc/no-blank-blocks': ['error'],
            'jsdoc/require-description-complete-sentence': ['error'],
            'jsdoc/require-param-description': ['off'],
            'jsdoc/require-param-description': ['off'],
            'jsdoc/require-returns-description': ['off'],
            'jsdoc/require-param': ['off'],
            'jsdoc/require-returns': ['off'],
            'jsdoc/require-param-type': ['error'],
        },
    }),
);
