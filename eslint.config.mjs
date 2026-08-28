import { renton } from "@renton/eslint-config";

export default renton({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  markdown: true,
  jsonc: true,
  typescript: true,
  yaml: true,
  formatters: {
    markdown: "prettier",
  },
}, {
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  files: ["pnpm-workspace.yaml"],
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
});
