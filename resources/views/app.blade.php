<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />


    <title inertia>{{ config('app.name', 'E.C Orinoco S.A.S') }}"</title>


    <!-- ✅ Descripción SEO -->
    <meta name="description"
          content="E.C Orinoco S.A.S — Ingeniería, construcción y soluciones sostenibles para el futuro." />

    <!-- ✅ Palabras clave -->
    <meta name="keywords" content="ingeniería, construcción, orinoco, proyectos, energía, sostenibilidad" />

    <!-- ✅ Color del tema (coincide con tu Tailwind o manifest.json) -->
    <meta name="theme-color" content="#ffffff" />

    <!-- Favicon principal -->
    <link rel="icon" href="/images/logo/favicon.ico">
    <link rel="icon" href="/favicon.ico" sizes="any">

    <!-- ✅ Iconos PWA / Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon-16x16.png">


    <!-- ✅ Open Graph (para compartir en redes) -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="E.C Orinoco S.A.S">
    <meta property="og:description" content="Ingeniería y sostenibilidad para un futuro mejor.">
    <meta property="og:image" content="/images/logo/android-chrome-512x512.png">
    <meta property="og:url" content="{{ url('/')}}">
    <meta property="og:site_name" content="E.C Orinoco S.A.S">

    <!-- ✅ Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="E.C Orinoco S.A.S">
    <meta name="twitter:description" content="Ingeniería, construcción y sostenibilidad.">
    <meta name="twitter:image" content="/images/logo/android-chrome-512x512.png">

    <!-- Fuente Inter (Google Fonts) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet" />


    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <link rel=" preconnect
    " href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @routes
    @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
@inertia
</body>

</html>
