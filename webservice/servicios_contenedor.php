<?php
include "db.php";

//-->SERVICIOS CONTENEDORES

//BUSQUEDA GENERAL
if (isset($_REQUEST['BGC'])) {
    $query = "SELECT * FROM CONTENEDOR INNER JOIN ALMACEN ON ALMACEN_IDALMACEN = IDALMACEN INNER JOIN TAMANO ON TAMANO_IDTAMANO = IDTAMANO";
    if(isset($_REQUEST['esp']) == "true"){
        $query = $query . " WHERE UNIDADES = 1";
    }else if(isset ($_REQUEST['esm']) == "true"){
        $query = $query . " WHERE UNIDADES = 2";
    }else if(isset ($_REQUEST['esg']) == "true"){
        $query = $query . " WHERE UNIDADES = 3";
    }
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//BUSQUEDA POR LOTE
if (isset($_REQUEST['BECN'])) {
    $lote = $_REQUEST['lote'];
    $query = "SELECT * FROM CONTENEDOR INNER JOIN ALMACEN ON ALMACEN_IDALMACEN = IDALMACEN INNER JOIN TAMANO ON TAMANO_IDTAMANO = IDTAMANO WHERE LOTE Like '%$lote%'";
    if(isset($_REQUEST['esp']) == "true"){
        $query = $query . " AND UNIDADES = 1";
    }else if(isset ($_REQUEST['esm']) == "true"){
        $query = $query . " AND UNIDADES = 2";
    }else if(isset ($_REQUEST['esg']) == "true"){
        $query = $query . " AND UNIDADES = 3";
    }
    
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//BUSQUEDA POR ID
if (isset($_REQUEST['BECI'])) {
    $id = $_REQUEST['idcont'];
    $query = "SELECT * FROM CONTENEDOR INNER JOIN ALMACEN ON ALMACEN_IDALMACEN = IDALMACEN INNER JOIN TAMANO ON TAMANO_IDTAMANO = IDTAMANO WHERE IDCONTENEDOR LIKE '%$id%'";
    
    if(isset($_REQUEST['esp']) == "true"){
        $query = $query . " AND UNIDADES = 1";
    }else if(isset ($_REQUEST['esm']) == "true"){
        $query = $query . " AND UNIDADES = 2";
    }else if(isset ($_REQUEST['esg']) == "true"){
        $query = $query . " AND UNIDADES = 3";
    }
    
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//BUSQUEDA COMBINADITA
if (isset($_REQUEST['BECNI'])) {
    $id = $_REQUEST['idcont'];
    $lote = $_REQUEST['lote'];
    $query = "SELECT * FROM CONTENEDOR "
                . "INNER JOIN TAMANO ON TAMANO_IDTAMANO = IDTAMANO "
                . "INNER JOIN ALMACEN ON ALMACEN_IDALMACEN = IDALMACEN "
                . "WHERE IDCONTENEDOR LIKE '%$id%' AND LOTE LIKE '%$lote%'";
    
    if(isset($_REQUEST['esp']) == "true"){
        $query = $query . " AND UNIDADES = 1";
    }else if(isset ($_REQUEST['esm']) == "true"){
        $query = $query . " AND UNIDADES = 2";
    }else if(isset ($_REQUEST['esg']) == "true"){
        $query = $query . " AND UNIDADES = 3";
    }
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//NUEVO CONTENEDOR (AUN NO LISTO)
if (isset($_REQUEST['NEWCONTENEDOR'])) {
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

if (isset($_REQUEST['NAV'])) {
    $nombreA = $_REQUEST['n'];
    $query = "SELECT * FROM CONTENEDOR";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}
