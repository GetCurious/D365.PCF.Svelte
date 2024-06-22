import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import flatDts from "rollup-plugin-flat-dts";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.js",
  output: {
    // The destination for our bundled JavaScript
    dir: "dist",
    entryFileNames: "index.js",
    name: "App",
    plugin: [typescript()],
  },
  plugins: [
    svelte({
      // Tell the svelte plugin where our svelte files are located
      include: "src/**/*.svelte",
    }),
    // Tell any third-party plugins that we're building for the browser
    resolve({ browser: true }),
    flatDts({ file: "index.d.ts" }),
  ],
};
