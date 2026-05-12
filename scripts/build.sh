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

echo "Deploying static files to project root..."
# 将 out/ 下的所有静态文件复制到项目根目录（与 out 平级）
cp -rf out/* .
# 复制隐藏文件（如有）
cp -rf out/.* . 2>/dev/null || true

echo "Static site deployed! index.html is at project root."
echo "Build completed successfully!"
