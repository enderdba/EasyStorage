<?php

include "db.php";

//AAAAA
if (isset($_REQUEST['GENERAL'])) {
    $query = "select idtraslado, fecha, "
            . "(select lote from contenedor where idcontenedor = contenedor_idcontenedor) as contenedor, "
            . "(select nombre from almacen where idalmacen = almacen_idalmacen1) as almacen1, "
            . "(select nombre from almacen where idalmacen = almacen_idalmacen2) as almacen2 "
            . "from traslado";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_REQUEST['INICIAL'])) {
    $fecha = $_REQUEST['fecha'];
    $query = "select idtraslado, fecha, "
            . "(select lote from contenedor where idcontenedor = contenedor_idcontenedor) as contenedor, "
            . "(select nombre from almacen where idalmacen = almacen_idalmacen1) as almacen1, "
            . "(select nombre from almacen where idalmacen = almacen_idalmacen2) as almacen2 "
            . "from traslado where fecha between '".$fecha."' and curdate()";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_REQUEST['ESPECIFICO'])) {
    $fecha1 = $_REQUEST['fecha1'];
    $fecha2 = $_REQUEST['fecha2'];
    $query = "select idtraslado, fecha, "
            . "(select lote from contenedor where idcontenedor = contenedor_idcontenedor) as contenedor, "
            . "(select nombre from almacen where idalmacen = almacen_idalmacen1) as almacen1, "
            . "(select nombre from almacen where idalmacen = almacen_idalmacen2) as almacen2 "
            . "from traslado where fecha between '".$fecha1."' and '".$fecha2."'";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}