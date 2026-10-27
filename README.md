# ThinkRail 语言包 / ThinkRail Language Packs

社区维护的 ThinkRail 界面翻译包。当前内置 **简体中文（zh）**，后续会持续添加更多语言。
Community-maintained UI translation packs for ThinkRail. Ships **Simplified Chinese (zh)** today, with more languages coming.

> 缺失的字符串会自动回退为英文；你保存后 ThinkRail 会立即采用你的改动。
> Missing strings fall back to English automatically; ThinkRail picks up your changes the moment you save.

---

## 目录结构 / Structure

```
thinkrail_language/
├── locales/
│   └── zh.json      # 简体中文语言包 / Simplified Chinese pack
├── install.sh       # macOS / Linux 一键安装 / one-click install
├── install.ps1      # Windows 一键安装 / one-click install
└── README.md
```

---

## 中文说明 / 使用方式

**方式一：让 AI 自动安装（一句话指令）**
把下面这句话发给任意 AI 助手（如 WorkBuddy），它会自动帮你装好：

```
安装 ThinkRail 中文语言包：把 https://git.20sp.cn/plugin/thinkrail_language.git 仓库里的 locales/zh.json 下载并复制到本机 ~/.thinkrail/locales/zh.json（Windows 为 C:\Users\<你的用户名>\.thinkrail\locales\zh.json），目录不存在就先创建，然后提示我重启 ThinkRail 即可生效。
```

**方式二：手动安装**
1. 下载本仓库的 `locales/zh.json`。
2. 复制到用户目录下的 ThinkRail 语言文件夹：
   - Windows：`C:\Users\<你的用户名>\.thinkrail\locales\zh.json`
   - macOS / Linux：`~/.thinkrail/locales/zh.json`
3. 重启 ThinkRail，在设置 → 语言中切换到「中文」。

**方式三：脚本安装**
- Windows（PowerShell）：`.\install.ps1`
- macOS / Linux：`./install.sh`

---

## English / How to use

**Method 1 — One-line AI install**
Send this single sentence to any AI assistant (e.g. WorkBuddy) and it will install the pack for you:

```
Install the ThinkRail Chinese language pack: download locales/zh.json from https://git.20sp.cn/plugin/thinkrail_language.git and copy it to ~/.thinkrail/locales/zh.json on this machine (Windows: C:\Users\<your-username>\.thinkrail\locales\zh.json); create the folder if it does not exist, then tell me to restart ThinkRail.
```

**Method 2 — Manual install**
1. Download `locales/zh.json` from this repo.
2. Copy it into ThinkRail's locale folder under your home directory:
   - Windows: `C:\Users\<your-username>\.thinkrail\locales\zh.json`
   - macOS / Linux: `~/.thinkrail/locales/zh.json`
3. Restart ThinkRail and switch the language to "中文" in Settings → Language.

**Method 3 — Script install**
- Windows (PowerShell): `.\install.ps1`
- macOS / Linux: `./install.sh`

---

## 贡献新语言 / Contribute a language

1. 从 ThinkRail 下载内置的 `en.json`（设置 → 语言 → 下载 en.json）。
2. 翻译其中所有的值，按你的语言代码保存（例如 `de.json`、`pt-BR.json`、`ja.json`）。
3. 放到 `locales/` 目录下，提交 Pull Request，或开 Issue 附上文件。
4. 没翻译到的字符串会保持英文，不影响使用。

1. Download the built-in `en.json` from ThinkRail (Settings → Language → Download en.json).
2. Translate all values and save it under your language code (e.g. `de.json`, `pt-BR.json`, `ja.json`).
3. Put it in the `locales/` folder and open a Pull Request, or attach the file in an Issue.
4. Untranslated strings stay in English and won't break anything.

---

## 反馈 / Feedback

需要其他语言、发现翻译问题，欢迎提 Issue：
https://git.20sp.cn/plugin/thinkrail_language/issues

Need another language or found a translation bug? Open an issue:
https://git.20sp.cn/plugin/thinkrail_language/issues

---

## 许可证 / License

MIT
