<?php

include "db.php";

if (isset($_REQUEST['BGA'])) {

    $q = mysqli_query($con, "SELECT * FROM ALMACEN");

while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 
}

   echo json_encode($data);

}

if (isset($_REQUEST['BEA'])) {
    $Nomb = $_REQUEST['namea'];
    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE NOMBRE Like %"+ $Nomb +"%");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}

if (isset($_REQUEST['BEA'])) {
    $idalma = $_REQUEST['IDA'];
    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE IDALMACEN = '$idalma'");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}

if (isset($_REQUEST['BEA'])) {
    $librena = $_REQUEST['libre_enable'];
    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE UNILIBRE > 0");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}

if (isset($_REQUEST['BEA'])) {
    $Nomb = $_REQUEST['namea'];
    $idalma = $_REQUEST['IDA'];
    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE NOMBRE LIKE %"+ $Nomb +"% AND IDALMACEN ='$idalma'");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}

if (isset($_REQUEST['BEA'])) {
    $Nomb = $_REQUEST['namea'];
    $librena = $_REQUEST['libre_enable'];
    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE NOMBRE = '$Nomb' AND IDALMACEN ='$idalma'");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}

if (isset($_REQUEST['BEA'])) {
    $idalma = $_REQUEST['IDA'];
    $librena = $_REQUEST['libre_enable'];
    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE IDALMACEN  = '$idalma' AND UNILIBRE > 0 ");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}

if (isset($_REQUEST['BEA'])) {
    $Nomb = $_REQUEST['namea'];
    $idalma = $_REQUEST['IDA'];
    $librena = $_REQUEST['libre_enable'];
    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE NOMBRE = '$Nomb' AND IDALMACEN ='$idalma' AND UNILIBRE > 0 ");
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}

if (isset($_REQUEST['BGC'])) {
    $Nomb = $_REQUEST['namea'];
    $idalma = $_REQUEST['IDA'];
    $tamano = $_REQUEST['tama'];
    $q = mysqli_query($con, "SELECT * FROM CONTENEDOR WHERE LOTE = '$Nomb' AND IDCONTENEDOR ='$idalma' AND PESO = 'tama'");
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}



if (isset($_REQUEST['BEC'])) {
    $Nomb = $_REQUEST['namea'];
    $idalma = $_REQUEST['IDA'];
    $tamano = $_REQUEST['tama'];
    $q = mysqli_query($con, "SELECT * FROM CONTENEDOR WHERE LOTE = '$Nomb' OR IDCONTENEDOR ='$idalma' OR PESO = 'tama'");
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 

    }

   echo json_encode($data);
}


/*if (isset($_REQUEST['login'])) {
    $usr = $_REQUEST['user'];
    $pw = $_REQUEST['password'];
    $q = mysqli_query($con, "SELECT IDUSUARIO FROM USUARIO WHERE NOMBRE = '$usr' AND PASS = '$pw'");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 
        echo "correcto";
        die;
    }
    echo "incorrecto";
}
*/

?>