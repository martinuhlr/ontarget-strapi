#!/bin/bash
# První deploy na nový server – spusť jako root na serveru
set -e
PROJECT="/home/user/htdocs/srv1304406.hstgr.cloud"
REPO="https://github.com/martinuhlr/ontarget-strapi.git"

echo "📁 Kontrola user..."
id user 2>/dev/null || (useradd -m -s /bin/bash user && echo "user ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/user)
mkdir -p /home/user/htdocs
chown user:user /home/user/htdocs

echo "📥 Clone + npm ci..."
su - user -c "git clone $REPO $PROJECT 2>/dev/null || (cd $PROJECT && git fetch origin && git reset --hard origin/master)"
su - user -c "cd $PROJECT && npm install"

echo "📄 .env..."
su - user -c "cd $PROJECT && [ -f .env ] || cp .env.example .env"

echo "🔨 Build..."
su - user -c "cd $PROJECT && npm run build"

echo "🔄 PM2..."
command -v pm2 >/dev/null 2>&1 || npm install -g pm2
su - user -c "cd $PROJECT && pm2 delete strapi 2>/dev/null; pm2 start npm --name strapi -- start"
su - user -c "pm2 save"
su - user -c "pm2 startup" 2>/dev/null || true

echo "✅ Hotovo. Strapi běží na portu 1337. Nastav .env (APP_KEYS, JWT secrets, DB) a pak: pm2 restart strapi"
