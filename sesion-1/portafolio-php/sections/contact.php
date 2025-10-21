<?php
    $clasesCss = "border-3 bg-info";
    $textoEnviar = "Subir formulario";
    $buttonType = "type=\"submit\"";
?>
<section>
    <h1>Contacto</h1>
    <form name="formulario" action="../php/formcontacto_post.php" >
        <fieldset>
            <label for="name">Nombre:</label>
            <input type="text" name="nombre" placeholder="Tu nombre" />
        </fieldset>
        <?php echo "<br/>"; ?>
        <fieldset>
            <label for="apellido">Apellido:</label>
            <input type="text" name="apellido" placeholder="Tu apellido" />
        </fieldset>
        <?="<br/>";?>
        <fieldset>
            <label for="mensaje">Mensaje:</label>
            <input type="text" name="mensaje" placeholder="Escribe algo..." />
        </fieldset>
        <br/>
        <button <?=$buttonType?> class="<?=$clasesCss?>"> <?=$textoEnviar?> </button>
    </form>
</section>
