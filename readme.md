# soj

### 安装

依赖laravel框架，具体配置要求请看https://d.laravel-china.org/docs/5.5/installation
需php-zip拓展
安装composer和nodejs后运行
```
composer install
npm install
npm run prod
```
之后复制.env.example文件为.env。运行
```
php artisan key:generate
```

数据库表：
```
php artisan migrate:refresh
```
创建管理员用户请输入
```
php artisan db:seed
```
如需测试样例请输入
```
php artisan db:seed --class=TestSeeder
```

判题端请看https://github.com/sxair/online-judge


### 展示

![soj](https://github.com/sxair/soj/blob/master/photo/soj.png?raw=true)
由于采用slideout.js 所以在移动端也有良好的体验

![soj](https://github.com/sxair/soj/blob/master/photo/soj-media.png?raw=true)
![soj](https://github.com/sxair/soj/blob/master/photo/soj-admin.png?raw=true)
