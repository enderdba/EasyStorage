<?php

include "db.php";

//CRUD DE ALMACENES

//CREATE

if (isset($_REQUEST['NEWALMACEN'])) {
    $nombre = $_REQUEST['nombrea'];
    $tamano = $_REQUEST['tamano'];
    $query = "INSERT INTO ALMACEN (NOMBRE,UNILIBRES, UNIMAX) VALUES ('$nombre',0,'$tamano')";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "No se pudo crear el almacén. Datos no válidos";
    }
}

//EDIT
if (isset($_REQUEST['EDITALMACEN'])) {
    $nombre = $_REQUEST['nombrea'];
    $tamano = $_REQUEST['tamano'];
    $idalma= $_REQUEST['idalma'];
    $query = "UPDATE ALMACEN SET NOMBRE='$nombre', UNIMAX='$tamano' WHERE IDALMACEN ='$idalma'";
    echo $query;
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "No se pudo editar el almacén. Datos no válidos";
    }
}

//READ
if (isset($_REQUEST['BGA'])) {
    $query = "SELECT * FROM ALMACEN";
    if (isset($_REQUEST['uni_libres'])) {
        $query = $query + " WHERE UNILIBRE > 0";
    }
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_REQUEST['BEA'])) {
    $Nomb = $_REQUEST['namea'];
    $query = "SELECT * FROM ALMACEN WHERE NOMBRE Like '%$Nomb%'";
    if (isset($_REQUEST['uni_libres'])) {
        $query = $query + " AND UNILIBRE > 0";
    }
    $q = mysqli_query($con, $query);

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_REQUEST['BEIO'])) {
    $idalma = $_REQUEST['idalma'];
    $query = "SELECT * FROM ALMACEN WHERE IDALMACEN = '$idalma'";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_REQUEST['BEI'])) {
    $idalma = $_REQUEST['idalma'];
    $query = "SELECT * FROM ALMACEN WHERE IDALMACEN Like '%$idalma%'";
    if (isset($_REQUEST['uni_libres'])) {
        $query = $query + " AND UNILIBRE > 0";
    }
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_REQUEST['BEAIDN'])) {
    $Nomb = $_REQUEST['namea'];
    $idalma = $_REQUEST['idalma'];
    $query = "SELECT * FROM ALMACEN WHERE IDALMACEN Like '%$idalma%' AND NOMBRE Like '%$Nomb%'";
    if (isset($_REQUEST['uni_libres'])) {
        $query = $query + " AND UNILIBRE > 0";
    }
    $q = mysqli_query($con, $query);

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}
?>