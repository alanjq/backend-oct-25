<h3>Lo que se envía al servidor</h3>

<?php
    $title  = $_REQUEST['titulo'];
    $body   = $_REQUEST['contenido'];
    $userId = $_REQUEST['idUsuario'];

    $post_object = array(
        "userId"=>$userId,
        "body"=>$body,
        "title" => $title
        );
    $json = json_encode($post_object);

    echo $json;
    // include './recibiendo_post.php';

?>
<h2>Datos recibidos</h2>
Titulo: <?=$title?> <br/>
Contenido: <?=$body?> <br/>
ID usuario: <?=$userId?> <br/>

<a href="recibiendo_post.php">Ver la respuesta</a>


