import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["bin/run.ts"],
  sourcemap: false,
  splitting: false,
});
