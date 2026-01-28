#!/bin/bash
# Spusť NA SERVERU přes SSH (jako root nebo user)
# Stáhne nejnovější kód z GitHubu, build, restart

set -e
PROJECT="/home/user/htdocs/srv1304406.hstgr.cloud"
REPO="https://github.com/martinuhlr/ontarget-strapi.git"

do_deploy() {
  cd "$PROJECT"
  echo "📥 Fetch z GitHubu..."
  git remote add ontarget "$REPO" 2>/dev/null || git remote set-url ontarget "$REPO"
  git fetch ontarget master
  echo "📦 Checkout src..."
  git checkout ontarget/master -- src/
  echo "🔨 npm run build..."
  npm run build
  echo "🔄 PM2 restart..."
  (pm2 restart strapi 2>/dev/null) || (pm2 restart all 2>/dev/null) || echo "Restartuj ručně v Hostinger panelu"
  echo "✅ Hotovo."
}

if [ "$(whoami)" = "root" ]; then
  su - user -c "cd $PROJECT && bash -c '$(declare -f do_deploy); do_deploy'"
else
  do_deploy
fi
