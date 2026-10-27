# Translation spec (for translator agents)

Workdir: `C:/Users/ERSHI/WorkBuddy/2026-10-27-18-02-41/thinkrail_language`

## Input / output
- Input: `locales/en.json` — flat JSON, **exactly 2472 keys**, dot-separated identifiers, English UI values.
- Output: `locales/<code>.json` — same object, **identical keys in identical order**, values translated into `<language>`.

## Hard rules
1. Never change, add, remove or reorder keys. Output must have exactly 2472 keys in the same order as `en.json`.
2. Preserve every placeholder exactly and in the same order:
   - `{{count}}`, `{{method}}`, `{{provider}}`, `{{url}}`, `{{labels}}`, `{{name}}`, … 
   - `<0>...</0>` tags: keep tags, translate only inner text.
   - `${NAME}`, `${TOKEN}`, `${1:-default}`
   - `$1`, `$ARGUMENTS`
   - `!command`
   Never translate/drop/add placeholders; keep surrounding spacing.
3. Keep unchanged: brand/product/technical tokens — ThinkRail, GitHub, Git, MCP, CLI, API, JSON, YAML, Markdown, npm, Bun, Node, Python, TypeScript, JavaScript, React, SQL, OAuth, token, commit, pull request, diff, prompt, skill, Workbench.
4. Do not translate file paths, shell commands, code identifiers, keyboard shortcuts, URLs.
5. Pure identifier/code values (`MCP`, `JSON`, `GET`, `POST`) stay unchanged.
6. Keep leading/trailing punctuation and ellipsis style (`…`, `—`).
7. UI style: sentence case; short labels take no trailing period; buttons use the language's imperative form.
8. Consistency: use the per-language glossary given in the task prompt.
9. Do not leave English unless brand/technical or identical by convention.

## How to write (avoid truncation)
- Do **not** emit the whole ~150KB file in one call.
- Split 2472 keys into **8 sequential chunks of ~300–320 keys**, in `en.json` order.
- Write `locales/_<code>_part_01.json` … `_part_08.json`, each containing only that chunk's key→translation pairs.
- Merge in order:
```
node -e "const fs=require('fs');const p=process.argv[1];const c=process.argv[2];let o={};for(let i=1;i<=8;i++){const f=p+'/locales/_'+c+'_part_'+String(i).padStart(2,'0')+'.json';Object.assign(o,JSON.parse(fs.readFileSync(f,'utf8')))}fs.writeFileSync(p+'/locales/'+c+'.json',JSON.stringify(o,null,'\t')+'\n','utf8');console.log('merged keys:',Object.keys(o).length)" "C:/Users/ERSHI/WorkBuddy/2026-10-27-18-02-41/thinkrail_language" "<code>"
```
- Delete the `_<code>_part_*.json` files afterwards.

## Verify before finishing
- Run `node scripts/validate.js`.
- Your language block must show: `keys=2472 missing=0 extra=0 empty=0 placeholderMismatch=0`.
- Fix any `placeholderMismatch` keys and re-run until 0.

## Report back
Final key count, your language's validator line, and values intentionally left in English.
