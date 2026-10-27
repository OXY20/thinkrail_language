#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CODE="${1:-zh}"
SRC="$SCRIPT_DIR/locales/$CODE.json"
DEST_DIR="$HOME/.thinkrail/locales"
DEST="$DEST_DIR/$CODE.json"

if [ ! -f "$SRC" ]; then
  echo "找不到语言包 / Language pack not found: $CODE"
  echo -n "可用语言 / Available: "
  ls "$SCRIPT_DIR/locales" | sed 's/\.json$//' | tr '\n' ' '
  echo
  exit 1
fi

mkdir -p "$DEST_DIR"
cp "$SRC" "$DEST"

echo "已安装 '$CODE' 语言包到: $DEST"
echo "Installed '$CODE' language pack to: $DEST"
echo "请重启 ThinkRail 以生效。 / Please restart ThinkRail to apply."
