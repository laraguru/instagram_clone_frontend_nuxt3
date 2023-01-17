module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/script-setup-no-uses-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/prop-name-casing': 'off',
        '@typescript-eslint/ban-types': 'off',
        'vue/valid-template-root': 'off',
        'vue/v-on-event-hyphenation': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/no-textarea-mustache': 'off',
        'vue/no-setup-props-destructure': 'off',
        'vue/no-template-shadow': 'off',
        'vue/no-v-html': 'off',
        'vue/require-v-for-key': 'off',
        'vue/no-unused-vars': 'off',
    },
}
