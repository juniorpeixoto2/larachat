<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ url('css/app.css') }}" rel="stylesheet">
    <link href="{{ url('css/chat.css') }}" rel="stylesheet">

    <script>
        window.Laravel = <?php echo json_encode(['user' => auth()->check() ? auth()->user()->id : null]) ?>
    </script>
</head>

<body>




    <div id="app">
        @yield('content')
    </div>

    <script src="{{ mix('js/app.js') }}"></script>

</body>

</html>