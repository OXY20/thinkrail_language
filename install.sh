#!/usr/bin/env bash
set -euo pipefail

SRC="$(cd "$(dirname "$0")" && pwd)/locales/zh.json"
DEST_DIR="$HOME/.thinkrail/locales"
DEST="$DEST_DIR/zh.json"

mkdir -p "$DEST_DIR"
cp "$SRC" "$DEST"

echo "ThinkRail 中文语言包已安装到: $DEST"
echo "Chinese language pack installed to: $DEST"
echo "请重启 ThinkRail 以生效。 / Please restart ThinkRail to apply."
