<?php

include "db.php";
if (isset($_REQUEST['login'])) {
    $usr = $_REQUEST['user'];
    $pw = $_REQUEST['password'];
    $q = mysqli_query($con, "SELECT IDUSUARIO FROM USUARIO WHERE NOMBRE = '$usr' AND PASSWORD = '$pw'");

    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row; 
        echo "correcto";
        die;
    }
    echo "incorrecto";
}
