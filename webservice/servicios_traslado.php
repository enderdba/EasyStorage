<?php

include "db.php";

//INSERT TRASLADO

if (isset($_REQUEST['TRI'])) {
    $idcont = $_REQUEST['idcont'];
    $idalma1 = $_REQUEST['idalma1'];
    $idalma2 = $_REQUEST['idalma2'];

    $query = "INSERT INTO TRASLADO (FECHA,CONTENEDOR_IDCONTENEDOR,ALMACEN_IDALMACEN1,ALMACEN_IDALMACEN2) VALUES (NOW(),'$idcont', '$idalma1', '$idalma2')";
    $q = mysqli_query($con, $query);

    if ($q) {
        echo "ok";
    } else {
        echo "Datos no válidos para registro de traslado.";
    }
}

//busqueda

if (isset($_REQUEST['TRIB'])) {
    $idalma1 = $_REQUEST['fecha2'];

    $query = "INSERT INTO TRASLADO (FECHA,CONTENEDOR_IDCONTENEDOR,ALMACEN_IDALMACEN1,ALMACEN_IDALMACEN2) VALUES (NOW(),'$idcont', '$idalma1', '$idalma2')";
    $q = mysqli_query($con, $query);

    if ($q) {
        echo "ok";
    } else {
        echo "Datos no válidos para registro de traslado.";
    }
}