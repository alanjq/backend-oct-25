<?php
    $mi_nombre = $_GET['nombre'];
    $mi_apellido = $_GET['apellido'];
    $mi_mensaje = $_GET['mensaje'];
?>
<h1>Probando el formulario</h1>

<?php
    echo "<b>". $mi_nombre . '</b> ' . $mi_apellido . '<i> escribió:  </i>"' . $mi_mensaje . '"';
?>
