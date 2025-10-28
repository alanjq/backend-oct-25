<?php
function conectarBD(){
        // Conexión a MySQL desde PHP
        include 'bd_params.php';
        // $BD_user = "root";
        // $BD_pass = "root";
        // $BD_name = "employees";
        // $BD_host = "localhost";
        
        $conex = mysqli_connect($BD_host, $BD_user, $BD_pass, $BD_name);
        
        if(!$conex){
            die("No se pudo conectar a la BD. Motivo: " . mysqli_connect_error());
        }
        // echo "Conexión correcta.";
        return $conex;
    }
?>
