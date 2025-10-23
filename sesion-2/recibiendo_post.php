<?php
    // Suponiendo que es respuesta del servidor
    $respuesta_servidor = '{"userId":"5","body":"Hola desde PHP en el navegador","title":"Hola"}';
    // Convertir a objeto manejable por PHP
    $respuesta = json_decode($respuesta_servidor); // Podriamos manipular los valores usando variables de PHP
    // $objeto = print_r( $respuesta );
    // echo 'body: ' . $objeto->get('body');

    echo "<h1>Respuesta del servidor</h1>";

    include './formulario.php';
?>


