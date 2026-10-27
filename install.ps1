$ErrorActionPreference = 'Stop'

$code = 'zh'
if ($args.Count -ge 1 -and $args[0]) { $code = $args[0] }

$src = Join-Path $PSScriptRoot "locales\$code.json"
$destDir = Join-Path $env:USERPROFILE '.thinkrail\locales'
$dest = Join-Path $destDir "$code.json"

if (-not (Test-Path $src)) {
    Write-Host "找不到语言包 / Language pack not found: $code"
    $available = Get-ChildItem (Join-Path $PSScriptRoot 'locales') -Filter *.json |
        ForEach-Object { $_.BaseName }
    Write-Host ("可用语言 / Available: " + ($available -join ' '))
    exit 1
}

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
Copy-Item -Force $src $dest

Write-Host "已安装 '$code' 语言包到: $dest"
Write-Host "Installed '$code' language pack to: $dest"
Write-Host "请重启 ThinkRail 以生效。 / Please restart ThinkRail to apply."
