<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Lantern</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,900&display=swap" rel="stylesheet">
        {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> --}}
        {{-- <link href="https://fonts.googleapis.com/css?family=Muli:700&display=swap" rel="stylesheet"> --}}

        <!-- Styles -->
        <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">

        {{-- Begin Intercom widget --}}
        <script>
            var APP_ID = "rec43wqu";

            window.intercomSettings = {
                app_id: APP_ID
            };
        </script>
        <script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
        {{-- End Intercom widget --}}
    </head>
    <body>
            {{-- <div id="olark_tab">
                    <div>
                        <a href="javascript:void(0);" onclick="olark('api.box.expand')">
                            Click to chat
                        </a>
                    </div>
                </div> --}}
        <div id="app" data-app-name="Lantern"></div>
        <script src="{{ secure_asset('js/app.js') }}"></script>
    </body>
</html>
