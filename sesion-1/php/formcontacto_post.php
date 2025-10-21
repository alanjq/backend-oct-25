<?php
    $mi_nombre = $_POST['nombre'];
    $mi_apellido = $_POST['apellido'];
    $mi_mensaje = $_POST['mensaje'];
    // también se puede usar request
    // $mi_nombre = $_REQUEST['nombre'];
    // $mi_apellido = $_REQUEST['apellido'];
    // $mi_mensaje = $_REQUEST['mensaje'];
?>
<h1>Probando el formulario</h1>

<?php
    echo "<b>". $mi_nombre . '</b> ' . $mi_apellido . '<i> escribió:  </i>"' . $mi_mensaje . '"';
?>
