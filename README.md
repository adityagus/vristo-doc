# VRISTO - Documentation Installation Guide

VRISTO is a multipurpose Tailwind Dashboard Template built with Laravel 10 and Vue 3 + TypeScript. This guide will help you install and configure the application.

## 📋 Requirements

Before you begin, ensure your system meets the following requirements:

### Backend Requirements
- **PHP**: >= 8.1
- **Composer**: Latest version
- **Database**: MySQL 5.7+ / PostgreSQL / SQLite
- **Extensions**: 
  - OpenSSL PHP Extension
  - PDO PHP Extension
  - Mbstring PHP Extension
  - Tokenizer PHP Extension
  - XML PHP Extension
  - Ctype PHP Extension
  - JSON PHP Extension
  - BCMath PHP Extension

### Frontend Requirements
- **Node.js**: >= 16.x
- **NPM**: >= 8.x or **Yarn**: >= 1.22.x

## 🚀 Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/adityagus/vristo-doc.git
cd vristo-doc
```

### 2. Backend Setup (Laravel)

#### Install PHP Dependencies

```bash
composer install
```

#### Environment Configuration

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

#### Configure Environment Variables

Edit `.env` file and configure the following:

```env
APP_NAME="VRISTO"
APP_ENV=local
APP_KEY=base64:... # Already generated
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database Configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=vristo_doc
DB_USERNAME=root
DB_PASSWORD=your_password
```

#### Database Setup

```bash
# Create database
mysql -u root -p -e "CREATE DATABASE vristo_doc"

# Run migrations
php artisan migrate

# (Optional) Seed database
php artisan db:seed
```

### 3. Frontend Setup (Vue 3 + Vite)

#### Install Node Dependencies

```bash
npm install
# or
yarn install
```

#### Build Assets

For development:
```bash
npm run dev
# or
yarn dev
```

For production:
```bash
npm run build
# or
yarn build
```

### 4. Run Application

#### Development Mode

**Terminal 1 - Laravel Server:**
```bash
php artisan serve
```

**Terminal 2 - Vite Dev Server:**
```bash
npm run dev
# or
yarn dev
```

Access the application at: `http://localhost:8000`

#### Production Mode

```bash
# Build frontend assets
npm run build

# Serve with PHP built-in server
php artisan serve

# Or configure web server (Apache/Nginx)
```

## 🔧 Configuration

### Storage Configuration

```bash
# Create symbolic link for storage
php artisan storage:link
```

### Cache Configuration

```bash
# Cache configuration
php artisan config:cache

# Cache routes (production only)
php artisan route:cache

# Cache views
php artisan view:cache
```

### Clear Cache

```bash
# Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

## 🎨 Key Features

- ✅ Laravel 10 Backend
- ✅ Vue 3 + TypeScript Frontend
- ✅ Tailwind CSS 3
- ✅ Vite Build Tool
- ✅ Vue Router
- ✅ Pinia State Management
- ✅ Multiple Dashboard Layouts
- ✅ Dark/Light Mode
- ✅ RTL Support
- ✅ Multi-language Support (i18n)
- ✅ Chart Components (ApexCharts)
- ✅ Data Tables
- ✅ Form Components
- ✅ Authentication Pages

## 📦 Tech Stack

### Backend
- Laravel 10.x
- Laravel Sanctum (API Authentication)
- Guzzle HTTP Client

### Frontend
- Vue 3.x
- TypeScript
- Vite
- Vue Router 4
- Pinia (State Management)
- Tailwind CSS 3
- Headless UI
- ApexCharts
- FullCalendar
- Quill Editor
- And many more...

## 🛠️ Troubleshooting

### Common Issues

#### 1. Permission Denied Errors

```bash
# Fix storage and cache permissions
sudo chmod -R 775 storage bootstrap/cache
sudo chown -R www-data:www-data storage bootstrap/cache
# Or for development
sudo chmod -R 777 storage bootstrap/cache
```

#### 2. Composer Memory Limit

```bash
# Increase memory limit
COMPOSER_MEMORY_LIMIT=-1 composer install
```

#### 3. Node Modules Issues

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 4. Vite Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

#### 5. Database Connection Error

- Verify database credentials in `.env`
- Ensure database server is running
- Check if database exists

#### 6. 404 on Routes

```bash
# Clear route cache
php artisan route:clear
php artisan optimize:clear
```

## 📚 Additional Commands

### Laravel Artisan Commands

```bash
# List all available commands
php artisan list

# Create a new controller
php artisan make:controller YourController

# Create a new model
php artisan make:model YourModel

# Create migration
php artisan make:migration create_your_table

# Run specific seeder
php artisan db:seed --class=YourSeeder
```

### NPM Scripts

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🔐 Security

- Never commit `.env` file
- Always use `APP_DEBUG=false` in production
- Configure proper file permissions
- Keep dependencies updated
- Use environment variables for sensitive data

## 📄 License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 🤝 Support

For issues and questions:
- Create an issue on GitHub
- Check Laravel documentation: https://laravel.com/docs
- Check Vue 3 documentation: https://vuejs.org

## 📝 Notes

- This is a documentation/demo version of VRISTO Admin Template
- Ensure all requirements are met before installation
- Follow security best practices for production deployment
- Regular updates are recommended for security patches
