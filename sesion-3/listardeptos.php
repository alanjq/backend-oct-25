<?php
    include './conexion/consulta.php';

    function listarDepartamento(){
        $query = "SELECT dept_no, dept_name FROM employees.departments";
        return consultar($query, "dept_name", "dept_no");
    }
?>

<select id="lista_deptos">
    <option>Elige departamento</option>
    <?=listarDepartamento()?>
</select>
