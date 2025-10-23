<form action="formulario_post.php" method="post">
    <div>
        <label>Título</label>
        <input name="titulo" value="<?=@$respuesta->title?>"/>
    </div>
    <div>
        <label>Contenido</label>
        <textarea name="contenido"><?=@$respuesta->body?></textarea>
    </div>
    <div>
        <input name="idUsuario" type="hidden" value="5">
        <button type="submit">Crear publicación</button>
    </div>
</form>
