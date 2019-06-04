<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Lantern</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        {{-- <link href="https://fonts.googleapis.com/css?family=Muli:700&display=swap" rel="stylesheet"> --}}

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app" data-app-name={{$app_name}}></div>
        <script src="{{ asset('js/app.js') }}"></script>
<!-- begin olark code -->
<script type=“text/javascript” async> ;(function(o,l,a,r,k,y){if(o.olark)return; r=“script”;y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src=“//“+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y(“extend”,i,j)}; y.identify=function(i){y(“identify”,k.i=i)}; y.configure=function(i,j){y(“configure”,i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,“static.olark.com/jsclient/loader.js”);
    /* custom configuration goes here (www.olark.com/documentation) */
    olark.identify(‘5057-960-10-5136’);</script>
    <!-- end olark code -->
    </body>
</html>
