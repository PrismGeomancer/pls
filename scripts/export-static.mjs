import { readFile, writeFile } from "node:fs/promises";

// Export one self-contained HTML file for local opening and static hosting.
// The editable HTML lives in src/index.html; root index.html is generated.
const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
let html = await readFile(new URL("index.html", dist), "utf8");
const scriptTag = html.match(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/);
const styleTag = html.match(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/);
if (!scriptTag || !styleTag) throw new Error("Missing production script or stylesheet");
let script = await readFile(new URL(scriptTag[1], dist), "utf8");
const style = await readFile(new URL(styleTag[1], dist), "utf8");
for (const name of ["hero-pulse.png", "pulse-signal-landscape.png", "pulse-network-world.png"]) {
  const bytes = await readFile(new URL(name, dist));
  script = script.replaceAll(name, `data:image/png;base64,${bytes.toString("base64")}`);
}
const logo = await readFile(new URL("agent-pulse-logo.svg", dist));
html = html.replace("./agent-pulse-logo.svg", `data:image/svg+xml;base64,${logo.toString("base64")}`);
html = html.replace(scriptTag[0], "");
html = html.replace(styleTag[0], () => `<style>${style.replaceAll("</style", "<\\/style")}</style>`);
// Run after #root exists. Bundled code has no imports and needs no module fetch.
html = html.replace("</body>", () => `<script>${script.replaceAll("</script", "<\\/script")}</script></body>`);
await writeFile(new URL("index.html", dist), html);
await writeFile(new URL("index.html", root), html);
await writeFile(new URL(".nojekyll", root), "");
