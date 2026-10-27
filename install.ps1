$ErrorActionPreference = 'Stop'

$src = Join-Path $PSScriptRoot 'locales\zh.json'
$destDir = Join-Path $env:USERPROFILE '.thinkrail\locales'
$dest = Join-Path $destDir 'zh.json'

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
Copy-Item -Force $src $dest

Write-Host "ThinkRail 中文语言包已安装到: $dest"
Write-Host "Chinese language pack installed to: $dest"
Write-Host "请重启 ThinkRail 以生效。 / Please restart ThinkRail to apply."
