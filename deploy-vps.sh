#!/bin/bash
# Deploy na VPS – spusť na serveru po SSH
set -e
cd /home/user/htdocs/srv1304406.hstgr.cloud
git config --global --add safe.directory /home/user/htdocs/srv1304406.hstgr.cloud 2>/dev/null || true
git remote add ontarget https://github.com/martinuhlr/ontarget-strapi.git 2>/dev/null || true
git fetch ontarget master
COMMIT=$(git rev-parse --short ontarget/master)
echo "Deploying commit: $COMMIT"
git checkout ontarget/master -- src/
npm run build
pm2 restart strapi
echo "Done. Deployed $COMMIT"
