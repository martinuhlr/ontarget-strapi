#!/bin/bash
set -e

# 1. Create user fintokei if not exists
if id "fintokei" &>/dev/null; then
    echo "User fintokei already exists"
else
    useradd -m -s /bin/bash fintokei
    echo "User fintokei created"
fi

# 2. Setup directory
APP_DIR="/home/fintokei/app"
mkdir -p "$APP_DIR"
chown fintokei:fintokei "$APP_DIR"

# 3. Generate SSH Key for fintokei if not exists
KEY_PATH="/home/fintokei/.ssh/id_ed25519"
if [ ! -f "$KEY_PATH" ]; then
    mkdir -p /home/fintokei/.ssh
    ssh-keygen -t ed25519 -f "$KEY_PATH" -N "" -C "deploy@fintokei"
    cat "$KEY_PATH.pub" >> /home/fintokei/.ssh/authorized_keys
    chown -R fintokei:fintokei /home/fintokei/.ssh
    chmod 700 /home/fintokei/.ssh
    chmod 600 /home/fintokei/.ssh/authorized_keys
    echo "SSH Key generated"
fi

# 4. Nginx Setup
NGINX_CONF="/etc/nginx/sites-available/fintokei"
cat > "$NGINX_CONF" <<EOF
server {
    server_name fintokei.on-target.cloud;

    location / {
        proxy_pass http://localhost:1338;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    listen 80;
}
EOF

ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/fintokei

# Test and Reload Nginx
nginx -t && systemctl reload nginx

# 5. Add fintokei to sudoers temporarily for PM2 (optional, but safer to run pm2 as user without sudo if possible, 
# but for startup scripts sudo is often needed. Let's install PM2 for user locally)
# Actually, better to just allow the user to run pm2 without password or just use the root pm2 to manage user processes?
# No, let's let the user run their own pm2 instance.
# To allow binding ports or systemd startup, we might need sudo. 
# For now, let's keep it simple.

echo "---PRIVATE KEY START---"
cat "$KEY_PATH"
echo "---PRIVATE KEY END---"
