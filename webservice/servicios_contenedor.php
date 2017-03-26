<?php

include "db.php";

//-->SERVICIOS CONTENEDORES
//BUSQUEDA GENERAL
if (isset($_REQUEST['BGC'])) {
    $query = "SELECT * FROM CONTENEDOR INNER JOIN ALMACEN ON ALMACEN_IDALMACEN = IDALMACEN INNER JOIN TAMANO ON TAMANO_IDTAMANO = IDTAMANO";
    if (isset($_REQUEST['esp']) == "true") {
        $query = $query . " WHERE UNIDADES = 1";
    } else if (isset($_REQUEST['esm']) == "true") {
        $query = $query . " WHERE UNIDADES = 2";
    } else if (isset($_REQUEST['esg']) == "true") {
        $query = $query . " WHERE UNIDADES = 3";
    }
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_REQUEST['BGCID'])) {
    $idalma = $_REQUEST['idalma'];
    $query = "SELECT * FROM CONTENEDOR WHERE ALMACEN_IDALMACEN = '$idalma'";
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
    if (isset($_REQUEST['esp']) == "true") {
        $query = $query . " AND UNIDADES = 1";
    } else if (isset($_REQUEST['esm']) == "true") {
        $query = $query . " AND UNIDADES = 2";
    } else if (isset($_REQUEST['esg']) == "true") {
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

    if (isset($_REQUEST['esp']) == "true") {
        $query = $query . " AND UNIDADES = 1";
    } else if (isset($_REQUEST['esm']) == "true") {
        $query = $query . " AND UNIDADES = 2";
    } else if (isset($_REQUEST['esg']) == "true") {
        $query = $query . " AND UNIDADES = 3";
    }

    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//BUSQUEDA POR ID EXACTO
if (isset($_REQUEST['BECI2'])) {
    $id = $_REQUEST['idcont'];
    $query = "SELECT * FROM CONTENEDOR INNER JOIN ALMACEN ON ALMACEN_IDALMACEN = IDALMACEN INNER JOIN TAMANO ON TAMANO_IDTAMANO = IDTAMANO WHERE IDCONTENEDOR = $id";

    if (isset($_REQUEST['esp']) == "true") {
        $query = $query . " AND UNIDADES = 1";
    } else if (isset($_REQUEST['esm']) == "true") {
        $query = $query . " AND UNIDADES = 2";
    } else if (isset($_REQUEST['esg']) == "true") {
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

    if (isset($_REQUEST['esp']) == "true") {
        $query = $query . " AND UNIDADES = 1";
    } else if (isset($_REQUEST['esm']) == "true") {
        $query = $query . " AND UNIDADES = 2";
    } else if (isset($_REQUEST['esg']) == "true") {
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
    $nlote = $_REQUEST['lote'];
    $alm = $_REQUEST['alm_aso'];
    $peso = $_REQUEST['peso'];
    $color = $_REQUEST['color'];
    $idt = $_REQUEST['idtam'];
    $query = "INSERT INTO CONTENEDOR (ALMACEN_IDALMACEN,TAMANO_IDTAMANO, PESO, COLOR, LOTE) "
            . "VALUES ((SELECT IDALMACEN FROM ALMACEN WHERE NOMBRE = '$alm'),'$idt','$peso','$color','$nlote')";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "No se pudo crear el almacén. Datos no válidos";
    }
}

if (isset($_REQUEST['NAV'])) {
    $nombreA = $_REQUEST['n'];
    $tam = $_REQUEST['tam'];
    $query = "SELECT UNILIBRES FROM ALMACEN WHERE NOMBRE = '" . $nombreA . "' AND UNILIBRES >= " . $tam . "";
    $q = mysqli_query($con, $query);
    if ($q) {
        $q = mysqli_query($con, $query);
        while ($row = mysqli_fetch_object($q)) {
            $data[] = $row;
        }

        echo json_encode($data);
    } else {
        echo "Error al intentar consultar la tabla Almacenes";
    }
}

if (isset($_REQUEST['EXISTEALM'])) {
    $nombreA = $_REQUEST['n'];
    $query = "SELECT UNILIBRES FROM ALMACEN WHERE NOMBRE = '" . $nombreA ."'";
    $q = mysqli_query($con, $query);
    if ($q) {
        if (mysqli_num_rows($q) == 0){
            echo "noresult";
        }else{
            echo "ok";
        }
    
    } else {
        echo "Error al intentar consultar la tabla Almacenes";
    }
}

if (isset($_REQUEST['CONSULTAUNI'])) {
    $alm = $_REQUEST['alm_m'];
    $query = "SELECT UNILIBRES FROM ALMACEN WHERE NOMBRE = '" . $alm . "'";
    $q = mysqli_query($con, $query);
    if ($q) {
        $q = mysqli_query($con, $query);
        while ($row = mysqli_fetch_object($q)) {
            $data[] = $row;
        }

        echo json_encode($data);
    } else {
        echo "Error al intentar consultar la tabla Almacenes";
    }
}

if (isset($_REQUEST['CONSULTAUNID'])) {
    $idalma = $_REQUEST['idalma'];
    $query = "SELECT UNILIBRES FROM ALMACEN WHERE id = '" . $idalma . "'";
    $q = mysqli_query($con, $query);
    if ($q) {
        $q = mysqli_query($con, $query);
        while ($row = mysqli_fetch_object($q)) {
            $data[] = $row;
        }

        echo json_encode($data);
    } else {
        echo "Error al intentar consultar la tabla Almacenes";
    }
}

if (isset($_REQUEST['UPDATEALM'])) {
    $alma = $_REQUEST['alma'];
    $tam = $_REQUEST['tam'];
    $uni = $_REQUEST['uni'];
    $query = "UPDATE ALMACEN SET UNILIBRES = $uni - $tam WHERE NOMBRE = '$alma'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "Ocurrio un error al momento de actualizar la tabla Almacen";
    }
}

if (isset($_REQUEST['UPDATEALMID'])) {
    $alma = $_REQUEST['idalma'];
    $tam = $_REQUEST['tam'];
    $uni = $_REQUEST['uni'];
    $query = "UPDATE ALMACEN SET UNILIBRES = $uni + $tam WHERE IDALMACEN = '$alma'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "Ocurrio un error al momento de actualizar la tabla Almacen";
    }
}

if (isset($_REQUEST['UPDATEALMID2'])) {
    $alma = $_REQUEST['idalma'];
    $tam = $_REQUEST['tam'];
    $uni = $_REQUEST['uni'];
    $query = "UPDATE ALMACEN SET UNILIBRES = $uni - $tam WHERE IDALMACEN = '$alma'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "Ocurrio un error al momento de actualizar la tabla Almacen";
    }
}

if (isset($_REQUEST['UPDATEALM2'])) {
    $alma = $_REQUEST['alma'];
    $tam = $_REQUEST['tam'];
    $uni = $_REQUEST['uni'];
    $query = "UPDATE ALMACEN SET UNILIBRES = $uni + $tam WHERE NOMBRE = '$alma'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "Ocurrio un error al momento de actualizar la tabla Almacen";
    }
}

if (isset($_REQUEST['BORRARCONTENEDOR'])) {
    $lote_m = $_REQUEST['lote_m'];
    $query = "DELETE FROM CONTENEDOR WHERE LOTE = '$lote_m'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "Ocurrio un error al momento de borrar el Contenedor";
    }
}


//ender


if (isset($_REQUEST['MOVERCONT'])) {
    $idcont = $_REQUEST['idcont'];
    $idalma = $_REQUEST['idalma'];
    $query = "UPDATE CONTENEDOR SET ALMACEN_IDALMACEN = '$idalma' WHERE IDCONTENEDOR = '$idcont'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "Ocurrio un error al momento de actualizar la tabla Almacen";
    }
}