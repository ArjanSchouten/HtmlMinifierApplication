## Html minifier application

This git repository contains the source code of the html minifier website. This website makes it easy to minify you're HTML.
This application uses the [HTML Minifier](http://github.com/ArjanSchouten/HtmlMinifier.git). This website will give you alot of options for minification.

Some of them are:
- Whitespace minification
- Comment removal (without conditional comments)
- Attribute quote removal
- Remove default attributes
- Remove empty attributes

### Installation
If you want to install this application use the following steps:

```
# clone the repo
git clone https://github.com/ArjanSchouten/HtmlMinifierApplication.git

# install dependencies
composer install --prefer-source

# install front-end dependencies
npm install

# compile the front-end dependencies
gulp --production

# create an env file
cp .env.example .env

# create a encryption key
php artisan key:generate

# setup the database schema 
php artisan migrate
```

### Run the application
You can run this application with ```php artisan serve``` or with Homestead (recommended):
```
vendor/bin/homestead make

vagrant up
```
Make sure you've installed composer dev dependencies too (which is default)!

### Testing
For testing make sure you've installed the dev dependencies! This application is tested with phpunit:
```
vendor/bin/phpunit
```

### Contributing
Contributions are welcome! Please create a PR if you've encounter some problems or if you've a new idea. 
For big changes please create an issue first. If you've found a bug please fix it through a PR. If you can't fix it please send a PR with a failing test!

### License
The Html minifier application is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
