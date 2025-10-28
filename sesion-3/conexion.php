<?php
    function conectarBD(){
        // Conexión a MySQL desde PHP
        $BD_user = "root";
        $BD_pass = "root";
        $BD_name = "employees";
        $BD_host = "localhost";
        
        $conex = mysqli_connect($BD_host, $BD_user, $BD_pass, $BD_name);
        
        if(!$conex){
            die("No se pudo conectar a la BD. Motivo: " . mysqli_connect_error());
        }
        // echo "Conexión correcta.";
        return $conex;
    }

    function consultar($query, $optionLabel, $optionValue){
        $conn = conectarBD();
        $resultado = $conn->query($query);

        $listado_nombres = "";

        while ($fila = $resultado->fetch_assoc()) {
            // Imprimimos el resultado
            $listado_nombres .= "<option value=\"{$fila[$optionValue]}\">{$fila[$optionLabel]}</option>";
        }
        return $listado_nombres;
    }

    function listarAutor(){
        $query = "SELECT distinct first_name FROM employees.employees ORDER BY first_name ASC limit 10";
        return consultar($query, "first_name", "first_name");
    }

    function listarDepartamento(){
        $query = "SELECT dept_no, dept_name FROM employees.departments";
        return consultar($query, "dept_name", "dept_no");
    }

?>

<select>
    <option>Selecciona autor</option>
    <?=listarAutor()?>
</select>

<select>
    <option>Elige departamento</option>
    <?=listarDepartamento()?>
</select>
