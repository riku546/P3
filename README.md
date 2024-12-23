# 初期設定

### laravelのディレクトリー

    composer install
    cp .env.example .env
    php artisan key:generate
    php artisan migrate

### nextjsのディレクトリー

    npm i
    cp .env.example .env.local


# プロジェックの立ち上げ

#### laravel

    php artisan serve


#### nextjs

    npm run dev
