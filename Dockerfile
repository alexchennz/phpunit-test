# Use official PHP image with PHP 8.2 and Apache
FROM php:8.2-apache

# Define the build argument
ARG REPO_NAME

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    wget

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Node.js and npm (using LTS version)
RUN wget https://nodejs.org/dist/v22.9.0/node-v22.9.0-linux-x64.tar.xz \
    && tar -xf node-v22.9.0-linux-x64.tar.xz -C /usr/local --strip-components=1 \
    && rm node-v22.9.0-linux-x64.tar.xz

# Verify Node.js and npm versions
RUN node --version
RUN npm --version

# Copy existing application directory contents
COPY . .

# Install Composer dependencies
RUN composer install --no-progress --no-interaction --prefer-dist

# Install npm dependencies
RUN npm install

# Generate key - do we need to do this???
# RUN php artisan key:generate --force

# Compile frontend assets
RUN npm run build

# Set up SQLite database
RUN mkdir -p database
RUN touch database/database.sqlite
RUN cp .env.example .env
RUN php artisan key:generate
RUN echo "DB_CONNECTION=sqlite" >> .env
RUN echo "DB_DATABASE=/var/www/html/database/database.sqlite" >> .env
RUN echo "SESSION_DRIVER=array" >> .env
RUN echo "CACHE_DRIVER=array" >> .env

#Ensure storage & cache directories are writable
RUN chmod -R 777 storage bootstrap/cache

#Configure database and authentication
RUN php artisan config:clear
RUN php artisan migrate:fresh --seed
RUN php artisan breeze:install react

#Run PHPUnit tests
RUN php artisan test

# Configure Apache document root
RUN sed -i 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]