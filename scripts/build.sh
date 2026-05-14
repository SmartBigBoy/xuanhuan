#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

cd "${COZE_WORKSPACE_PATH}"

echo "Installing dependencies..."
pnpm install --prefer-frozen-lockfile --prefer-offline --loglevel debug --reporter=append-only

# 在构建前备份 _next/ 中的旧hash文件，避免CDN缓存404
if [ -d "_next/static" ]; then
  echo "Backing up old _next/static files..."
  rm -rf /tmp/_next_static_backup
  cp -r _next/static /tmp/_next_static_backup
fi

echo "Building the Next.js static export..."
NODE_OPTIONS="--max-old-space-size=4096" pnpm next build

echo "Generating sitemap.xml..."
node scripts/generate-sitemap.mjs

echo "Copying sitemap and robots to out/..."
cp -f public/robots.txt out/robots.txt 2>/dev/null || true

echo "Injecting Google AdSense code into HTML files..."
ADSENSE_TAG='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6560822080596473" crossorigin="anonymous"><\/script>'
find out/ -name "*.html" -type f | while read f; do
  sed -i "s|</head>|${ADSENSE_TAG}</head>|" "$f"
done
echo "AdSense code injected."

echo "Deploying static files to project root..."
# 清理根目录的旧页面文件（不含 _next，保留旧版本hash文件避免CDN缓存404）
rm -rf novels maps realms wiki community assets index.html 404.html sitemap.xml robots.txt
# 将 out/ 下的所有静态文件复制到项目根目录（与 out 平级）
cp -rf out/* .
# 恢复旧 _next/static 备份（合并，保留旧hash文件）
if [ -d "/tmp/_next_static_backup" ]; then
  echo "Restoring old _next/static files (merge)..."
  cp -rn /tmp/_next_static_backup/* _next/static/ 2>/dev/null || true
  rm -rf /tmp/_next_static_backup
fi
# 复制 .nojekyll（让 GitHub Pages 不使用 Jekyll，避免忽略 _next/ 目录）
cp -f out/.nojekyll . 2>/dev/null || true

echo "Static site deployed! index.html is at project root."
echo "Build completed successfully!"
