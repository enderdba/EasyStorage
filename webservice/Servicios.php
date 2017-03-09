<?php

include "db.php";

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
    $idalma = $_REQUEST['IDA'];
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

//if (isset($_REQUEST['BEA'])) {
//    $Nomb = $_REQUEST['namea'];
//    $librena = $_REQUEST['libre_enable'];
//    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE NOMBRE = '$Nomb' AND IDALMACEN ='$idalma'");
//
//    while ($row = mysqli_fetch_object($q)) {
//        $data[] = $row;
//    }
//
//    echo json_encode($data);
//}
//if (isset($_REQUEST['BEA'])) {
//    $idalma = $_REQUEST['IDA'];
//    $librena = $_REQUEST['libre_enable'];
//    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE IDALMACEN  = '$idalma' AND UNILIBRE > 0 ");
//
//    while ($row = mysqli_fetch_object($q)) {
//        $data[] = $row;
//    }
//
//    echo json_encode($data);
//}
//
//if (isset($_REQUEST['BEA'])) {
//    $Nomb = $_REQUEST['namea'];
//    $idalma = $_REQUEST['IDA'];
//    $librena = $_REQUEST['libre_enable'];
//    $q = mysqli_query($con, "SELECT * FROM ALMACEN WHERE NOMBRE = '$Nomb' AND IDALMACEN ='$idalma' AND UNILIBRE > 0 ");
//    while ($row = mysqli_fetch_object($q)) {
//        $data[] = $row;
//    }
//
//    echo json_encode($data);
//}
//
//if (isset($_REQUEST['BGC'])) {
//    $Nomb = $_REQUEST['namea'];
//    $idalma = $_REQUEST['IDA'];
//    $tamano = $_REQUEST['tama'];
//    $q = mysqli_query($con, "SELECT * FROM CONTENEDOR WHERE LOTE = '$Nomb' AND IDCONTENEDOR ='$idalma' AND PESO = 'tama'");
//    while ($row = mysqli_fetch_object($q)) {
//        $data[] = $row;
//    }
//
//    echo json_encode($data);
//}
//
//
//
//if (isset($_REQUEST['BEC'])) {
//    $Nomb = $_REQUEST['namea'];
//    $idalma = $_REQUEST['IDA'];
//    $tamano = $_REQUEST['tama'];
//    $q = mysqli_query($con, "SELECT * FROM CONTENEDOR WHERE LOTE = '$Nomb' OR IDCONTENEDOR ='$idalma' OR PESO = 'tama'");
//    while ($row = mysqli_fetch_object($q)) {
//        $data[] = $row;
//    }
//
//    echo json_encode($data);
//}


/* if (isset($_REQUEST['login'])) {
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