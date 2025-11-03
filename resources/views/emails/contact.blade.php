<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Nuevo mensaje de contacto</title>
</head>
<body style="font-family: Arial, sans-serif; color:#333;">
<h2>Nuevo mensaje de contacto recibido</h2>
<p><strong>Nombre:</strong> {{ $data['name'] }} {{ $data['lastname'] ?? '' }}</p>
<p><strong>Correo:</strong> {{ $data['email'] }}</p>
<p><strong>Teléfono:</strong> {{ $data['phone'] ?? 'No proporcionado' }}</p>
<p><strong>Asunto:</strong> {{ $data['subject'] ?? 'Sin asunto' }}</p>
<p><strong>Mensaje:</strong></p>
<p>{{ $data['message'] }}</p>
</body>
</html>
