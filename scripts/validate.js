const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "locales");
const en = JSON.parse(fs.readFileSync(path.join(dir, "en.json"), "utf8"));
const enKeys = Object.keys(en);

function phs(s) {
  const out = [];
  const res = [
    /\{\{[^}]+\}\}/g,          // {{count}}
    /<\/?\d+>/g,               // <0> </0>
    /\$\{[^}]+\}/g,            // ${NAME}, ${1:-default}
    /\$[A-Za-z_][A-Za-z0-9_]*/g,
    /\$\d+/g,                  // $1
    /![\w-]+/g                 // !command
  ];
  for (const re of res) {
    const m = s.match(re) || [];
    out.push(...m);
  }
  return out.sort();
}

let bad = 0;
const files = fs.readdirSync(dir).filter(f => f.endsWith(".json") && f !== "en.json");
for (const f of files) {
  const code = f.replace(/\.json$/, "");
  let obj;
  try { obj = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")); }
  catch (e) { console.log(`✗ ${code}: JSON parse error: ${e.message}`); bad++; continue; }

  const keys = Object.keys(obj);
  const missing = enKeys.filter(k => !(k in obj));
  const extra = keys.filter(k => !(k in en));
  const empty = keys.filter(k => typeof obj[k] !== "string" || obj[k].trim() === "");
  const phBad = keys.filter(k => {
    const a = phs(en[k] || ""), b = phs(obj[k] || "");
    return a.join("|") !== b.join("|");
  });
  const identical = keys.filter(k => obj[k] === en[k] && en[k].length > 3);

  console.log(`\n=== ${code} ===`);
  console.log(`keys=${keys.length} missing=${missing.length} extra=${extra.length} empty=${empty.length} placeholderMismatch=${phBad.length} identicalToEn=${identical.length} (${(identical.length/keys.length*100).toFixed(0)}%)`);
  if (missing.length) console.log("  missing:", missing.slice(0, 5));
  if (extra.length) console.log("  extra:", extra.slice(0, 5));
  if (empty.length) console.log("  empty:", empty.slice(0, 5));
  if (phBad.length) { console.log("  phBad:", phBad.slice(0, 8)); phBad.slice(0,5).forEach(k=>console.log("    ", k, "| EN:", JSON.stringify(en[k]), "| T:", JSON.stringify(obj[k]))); }
  if (missing.length || extra.length || empty.length || phBad.length) bad++;
}
console.log(`\nRESULT: ${files.length} locale file(s) checked, ${bad} with problems.`);
