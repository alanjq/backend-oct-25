<?php
    $fecha = "20 de octubre, 2025";
    include './functions.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo imprimeH1("Hoy es " . $fecha);
    ?>
</body>
</html>
