module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
    plugins: ["react-refresh", "simple-import-sort"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "no-console": "error", // Error con los logs
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_.*?$",
            },
        ],
        quotes: ["error", "double"],
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "*", next: ["return", "export"] },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
        ],
    },
};
