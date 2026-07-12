import eslintPluginAstro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";

export default [
  {
    ignores: [".astro/**", "dist/**"],
  },
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    // MDX linting with recommended ruleset
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
    },
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
