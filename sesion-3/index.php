<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listar departamentos y empleados</title>
</head>
<body>
    <div>
        <h1>Departamentos y empleados</h1>
        <?php include 'listardeptos.php'; ?>

        <select id="lista_empleados">
        </select>
    </div>

    <script>
        // Agregarle evento al cambiar la lista de empleados
        document.addEventListener("DOMContentLoaded", function(){
            let selectDeptos = document.getElementById('lista_deptos');
            if(selectDeptos.value != ""){
                selectDeptos.addEventListener("change", function(){
                    fetch(`http://localhost/backend/sesion-3/listarempleadoxdepto.php?id=${selectDeptos.value}`)
                    .then(r=>r.json())
                    .then(data=>{
                        let html = ""
                        data.map((fila)=>{
                            html+= `<option value="${fila.dept_no}">${fila.employee}</option>`;
                        })
                        document.getElementById('lista_empleados').innerHTML = html
                    })
                })
            }
        })
    </script>
</body>
</html>