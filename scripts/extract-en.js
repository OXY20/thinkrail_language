const fs = require("fs");
const src = process.argv[2];
const out = process.argv[3];
const s = fs.readFileSync(src, "utf8");

const key = '"app.errorBoundary.label"';
const i = s.indexOf(key);
if (i < 0) throw new Error("anchor key not found");
const start = s.lastIndexOf("{", i);

// bracket match respecting " ' ` strings
let depth = 0, end = -1;
let quote = null, esc = false;
for (let j = start; j < s.length; j++) {
  const ch = s[j];
  if (esc) { esc = false; continue; }
  if (ch === "\\") { esc = true; continue; }
  if (quote) { if (ch === quote) quote = null; continue; }
  if (ch === '"' || ch === "'" || ch === "`") { quote = ch; continue; }
  if (ch === "{") depth++;
  else if (ch === "}") { depth--; if (depth === 0) { end = j; break; } }
}
if (end < 0) throw new Error("matching brace not found");
const objText = s.slice(start, end + 1);

if (objText.includes("${")) console.log("WARN: contains ${ interpolation");
if (/`[^`]*`/.test("")) {}

let obj;
try {
  obj = new Function("return (" + objText + ")")();
} catch (e) {
  throw new Error("eval failed: " + e.message);
}
fs.writeFileSync(out, JSON.stringify(obj, null, "\t") + "\n", "utf8");
const keys = Object.keys(obj);
console.log("extracted keys:", keys.length);
const empty = keys.filter(k => typeof obj[k] !== "string");
console.log("non-string values:", empty.length);
const backtickVals = keys.filter(k => obj[k].includes("`"));
console.log("values containing backtick:", backtickVals.length);
console.log("sample:", JSON.stringify({k: keys[0], v: obj[keys[0]]}));
