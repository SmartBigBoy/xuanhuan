#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

cd "${COZE_WORKSPACE_PATH}"

echo "Installing dependencies..."
pnpm install --prefer-frozen-lockfile --prefer-offline --loglevel debug --reporter=append-only

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
# 先清理根目录的旧静态文件
rm -rf novels maps realms wiki community _next assets index.html 404.html sitemap.xml robots.txt
# 将 out/ 下的所有静态文件复制到项目根目录（与 out 平级）
cp -rf out/* .
# 复制 .nojekyll（让 GitHub Pages 不使用 Jekyll，避免忽略 _next/ 目录）
cp -f out/.nojekyll . 2>/dev/null || true

echo "Static site deployed! index.html is at project root."
echo "Build completed successfully!"
