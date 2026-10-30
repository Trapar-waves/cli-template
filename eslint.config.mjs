import { renton } from "@renton/eslint-config";

export default renton({
  formatters: {
    markdown: "prettier",
  },
  jsonc: true,
  markdown: true,
  stylistic: {
    quotes: "double",
    semi: true,
  },
  typescript: true,
  yaml: true,
});
