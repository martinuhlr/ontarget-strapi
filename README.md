# OnTarget Strapi CMS

A Strapi headless CMS application for OnTarget.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.0.0 <= 24.x.x
- npm >= 6.0.0

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Generate secure keys and update `.env`:
   ```bash
   # Generate APP_KEYS (use 4 different keys)
   openssl rand -base64 32
   
   # Generate security keys
   openssl rand -base64 32  # For API_TOKEN_SALT
   openssl rand -base64 32  # For ADMIN_JWT_SECRET
   openssl rand -base64 32  # For TRANSFER_TOKEN_SALT
   openssl rand -base64 32  # For JWT_SECRET
   openssl rand -base64 32  # For ENCRYPTION_KEY
   ```

5. Start the development server:
   ```bash
   npm run develop
   ```

## 📦 Available Scripts

- `npm run develop` - Start development server with auto-reload
- `npm run build` - Build the admin panel for production
- `npm run start` - Start production server
- `npm run strapi` - Run Strapi CLI commands

## 🗄️ Database

This project supports both SQLite (development) and MySQL (production).

### Development (SQLite)
Default configuration uses SQLite. No additional setup required.

### Production (MySQL)
Update your `.env` file with MySQL credentials:
```env
DATABASE_CLIENT=mysql
DATABASE_HOST=your_host
DATABASE_PORT=3306
DATABASE_NAME=your_database
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
```

## 🚢 Deployment

### Deploy na VPS (Hostinger)

Na serveru po SSH spusť:

```bash
cd /home/user/htdocs/srv1304406.hstgr.cloud
git remote add ontarget https://github.com/martinuhlr/ontarget-strapi.git 2>/dev/null || true
git fetch ontarget master
git checkout ontarget/master -- src/
npm run build
pm2 restart strapi
```

Nebo: `bash deploy-vps.sh` (pokud je skript na serveru).

For other deployment details, see [DEPLOYMENT.md](./DEPLOYMENT.md) if present.

## 📚 Learn More

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Community](https://discord.strapi.io)
