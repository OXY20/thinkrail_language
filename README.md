# ThinkRail 语言包 / ThinkRail Language Packs

社区维护的 ThinkRail 界面翻译包。目前提供 **9 种语言**，每种均覆盖全部 **2472 条**字符串。
Community-maintained UI translation packs for ThinkRail. **9 languages**, each covering all **2,472** strings.

> 缺失的字符串会自动回退为英文；你保存后 ThinkRail 会立即采用你的改动。
> Missing strings fall back to English automatically; ThinkRail picks up your changes the moment you save.

> 译文由社区与 AI 辅助生成，欢迎提交 PR 修正。
> Translations are community/AI-assisted — corrections via PR are welcome.

---

## 语言列表 / Languages

| 代码 | 语言 | Language | 文件 |
|---|---|---|---|
| `zh` | 简体中文 | Chinese (Simplified) | `locales/zh.json` |
| `es` | Español | Spanish | `locales/es.json` |
| `pt` | Português (Brasil) | Portuguese (Brazil) | `locales/pt.json` |
| `fr` | Français | French | `locales/fr.json` |
| `ru` | Русский | Russian | `locales/ru.json` |
| `de` | Deutsch | German | `locales/de.json` |
| `id` | Bahasa Indonesia | Indonesian | `locales/id.json` |
| `ar` | العربية | Arabic | `locales/ar.json` |
| `ja` | 日本語 | Japanese | `locales/ja.json` |

`locales/en.json` 是英文原文基准，供翻译参考，不需要安装。
`locales/en.json` is the English baseline for translators; it is not meant to be installed.

---

## 目录结构 / Structure

```
thinkrail_language/
├── locales/
│   ├── en.json          # 英文原文基准 / English baseline
│   ├── zh.json  es.json  pt.json  fr.json  ru.json
│   └── de.json  id.json  ar.json  ja.json
├── languages.json       # 语言清单 / language manifest
├── install.sh           # macOS / Linux 安装脚本 / installer
├── install.ps1          # Windows 安装脚本 / installer
├── scripts/
│   ├── extract-en.js    # 从 ThinkRail 安装包提取英文原文
│   └── validate.js      # 校验键与占位符完整性
├── README.md
└── LICENSE
```

---

## 中文说明 / 使用方式

**方式一：让 AI 自动安装（一句话指令）**
把下面这句话发给任意 AI 助手（如 WorkBuddy），把 `es` 换成你需要的语言代码即可：

```
安装 ThinkRail 语言包（语言代码：es）：从 https://git.20sp.cn/plugin/thinkrail_language.git 下载 locales/es.json，复制到本机 ~/.thinkrail/locales/es.json（Windows 为 C:\Users\<你的用户名>\.thinkrail\locales\es.json），目录不存在就先创建，完成后提示我重启 ThinkRail。
```

**方式二：手动安装**
1. 从本仓库下载 `locales/<代码>.json`。
2. 复制到用户目录下的 ThinkRail 语言文件夹，并**保持文件名不变**：
   - Windows：`C:\Users\<你的用户名>\.thinkrail\locales\<代码>.json`
   - macOS / Linux：`~/.thinkrail/locales/<代码>.json`
3. 重启 ThinkRail，在「设置 → 语言」中切换到对应语言。

**方式三：脚本安装**
```bash
# macOS / Linux（省略代码则默认 zh）
./install.sh es

# Windows PowerShell
.\install.ps1 es
```

---

## English / How to use

**Method 1 — One-line AI install**
Send this sentence to any AI assistant (e.g. WorkBuddy), replacing `es` with your language code:

```
Install the ThinkRail language pack (code: es): download locales/es.json from https://git.20sp.cn/plugin/thinkrail_language.git and copy it to ~/.thinkrail/locales/es.json on this machine (Windows: C:\Users\<your-username>\.thinkrail\locales\es.json); create the folder if it does not exist, then tell me to restart ThinkRail.
```

**Method 2 — Manual install**
1. Download `locales/<code>.json` from this repo.
2. Copy it into ThinkRail's locale folder under your home directory, **keeping the filename**:
   - Windows: `C:\Users\<your-username>\.thinkrail\locales\<code>.json`
   - macOS / Linux: `~/.thinkrail/locales/<code>.json`
3. Restart ThinkRail and pick the language in Settings → Language.

**Method 3 — Script install**
```bash
# macOS / Linux (defaults to zh when no code is given)
./install.sh es

# Windows PowerShell
.\install.ps1 es
```

---

## 校验 / Validation

提交前请运行校验，确认键数量、键序与占位符完全一致：
Run the validator before submitting to ensure key parity and placeholder integrity:

```bash
node scripts/validate.js
```

期望输出 / Expected: every language shows
`keys=2472 missing=0 extra=0 empty=0 placeholderMismatch=0`.

---

## 贡献新语言 / Contribute a language

1. 从 ThinkRail 下载内置的 `en.json`（设置 → 语言 → 下载 en.json），或直接使用本仓库的 `locales/en.json`。
2. 翻译所有值，按语言代码保存为 `locales/<代码>.json`（如 `ko.json`、`it.json`）。
3. 保持键名、键序与占位符不变：
   `{{count}}`、`<0>…</0>`、`${NAME}`、`$1`、`$ARGUMENTS`、`!command`。
4. 运行 `node scripts/validate.js`，确认 0 问题。
5. 在 `languages.json` 里登记新语言，提交 Pull Request；或开 Issue 附上文件。

1. Get the built-in `en.json` from ThinkRail (Settings → Language → Download en.json) or use `locales/en.json` here.
2. Translate all values and save as `locales/<code>.json` (e.g. `ko.json`, `it.json`).
3. Keep keys, key order and placeholders unchanged:
   `{{count}}`, `<0>…</0>`, `${NAME}`, `$1`, `$ARGUMENTS`, `!command`.
4. Run `node scripts/validate.js` and confirm 0 problems.
5. Register the language in `languages.json`, then open a Pull Request — or attach the file in an Issue.

未翻译的字符串会保持英文，不影响使用。
Untranslated strings stay in English and won't break anything.

---

## 反馈 / Feedback

需要其他语言、发现翻译问题，欢迎提 Issue：
https://git.20sp.cn/plugin/thinkrail_language/issues

Need another language or found a translation bug? Open an issue:
https://git.20sp.cn/plugin/thinkrail_language/issues

---

## 许可证 / License

MIT — 见 [LICENSE](LICENSE) / see [LICENSE](LICENSE).
