<!DOCTYPE html>
<html>
    <head>
        <title>Html minifier (Alfa)</title>
        <meta charset="UTF-8"/>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href="{{ elixir('css/app.css') }}">
    </head>
    <body>
        <div class="container">
            <div class="alert alert-danger" id="unstable-alert">
                <p>This Html Minifier is currently in unstable Alfa version. Use it with care! Don't use this for production!</p>
            </div>
        </div>
        @yield('content')
        <div class="container">
            <p>Check the <a href="https://github.com/ArjanSchouten/HtmlMinifier">github</a> repository if you are curious!</p>
            <p>You can create an issue or a pull request when you find a bug! I also like to hear your <a href="mailto:mail@arjan-schouten.nl">feedback!</a></p>
            <p>This package is developed and maintained by <a href="http://www.arjan-schouten.nl">Arjan Schouten</a>.</p>
        </div>
        <script src="{{elixir('js/app.js')}}"></script>
    </body>
</html>
