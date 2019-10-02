module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:prettier/recommended',
        'airbnb-typescript',
        'airbnb-typescript-prettier',
        'esnext',
        'eslint:recommended'
    ],

    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
        'import/no-namespace': 'off',
        'import/no-cycle': [2, { maxDepth: 1 }],
        'no-invalid-this': 'off',
        'import/prefer-default-export': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
            }
        }
    }
};
