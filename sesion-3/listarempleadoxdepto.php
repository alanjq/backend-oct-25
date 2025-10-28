<?php
    // Trae los datos en formato JSON según el valor que se envie
    include './conexion/consulta.php';
    $iddepto = $_REQUEST['id'];

    $query = "SELECT dep.dept_no, e.emp_no, concat(first_name,' ', last_name) as employee, dep.dept_name
        FROM employees.employees e
        INNER JOIN employees.dept_emp d
            ON d.emp_no = e.emp_no
        INNER JOIN employees.departments dep
            ON dep.dept_no = d.dept_no
        WHERE dep.dept_no = '$iddepto'
        LIMIT 15";

    // Imprime los resultados en formato JSON
    echo consultarApi($query)
?>