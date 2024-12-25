## PPPとは
    Programming Practice Platformの略です。
    プログラミング言語の問題を解き、スキルを向上させることを目的としています。
    ただ問題を解くだけではなく、問題の共有もできるようになっています。

    

## 初期設定

### laravelのディレクトリー

    composer install
    cp .env.example .env
    php artisan key:generate
    

### .envの設定
    DBを利用できるように設定を行ってください。
    以下の環境変数を追加してください。
        GEMINI_API_KEY
        
### マイグレーション
    php artisan migrate

### nextjsのディレクトリー

    npm i
    cp .env.example .env.local


## プロジェックの立ち上げ

#### laravel

    php artisan serve


#### nextjs

    npm run dev
