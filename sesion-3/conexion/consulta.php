<?php
    include 'bd_conex.php';
    
    conectarBD();

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

     function consultarApi($query){
        $conn = conectarBD();
        $resultado = $conn->query($query);

        // Traer los datos según la cantidad de registros
        if($resultado->num_rows > 0){
            $data = array();
            while($row = $resultado->fetch_assoc()){
                $data[] = $row;
            }
            return json_encode($data, JSON_PRETTY_PRINT);
        }else{
            return json_encode(array("Message"=> "No hay registros."));
        }
    }
?>
