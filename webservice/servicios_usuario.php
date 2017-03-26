<?php

include "db.php";
//CRUD DE USUARIOS
//CREATE
if (isset($_REQUEST['NEWUSUARIO'])) {
    $nombre = $_REQUEST['nombre'];
    $usertype = $_REQUEST['usertype'];
    $cod_trabajador = $_REQUEST['workerc'];
    $telefono = $_REQUEST['phone'];
    $pw = $_REQUEST['pwd'];
    $query = "INSERT INTO USUARIO (TIPODEUSUARIO_IDTIPODEUSUARIO, COD_TRABAJADOR,NOMBRE,FECHA_NACIMIENTO,TELEFONO,PASSWORD)"
            . " VALUES ('$usertype','$cod_trabajador','$nombre','1995-01-01','$telefono','$pw')";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "No se pudo crear el usuario. Datos no válidos";
    }
}
//EDIT
if (isset($_REQUEST['EDITUSUARIO'])) {
    $id = $_REQUEST['id'];
    $nombre = $_REQUEST['nombre'];
    $usertype = $_REQUEST['usertype'];
    $cod_trabajador = $_REQUEST['workerc'];
    $telefono = $_REQUEST['phone'];
    $pw = $_REQUEST['pwd'];

    $query = "UPDATE USUARIO SET TIPODEUSUARIO_IDTIPODEUSUARIO= '$usertype', COD_TRABAJADOR='$cod_trabajador', NOMBRE ='$nombre',"
            . " FECHA_NACIMIENTO ='1995-01-01', TELEFONO = '$telefono' , PASSWORD = '$pw' WHERE IDUSUARIO ='$id'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "No se pudo editar el usuario. Datos no válidos";
    }
}
//DELETE
if (isset($_REQUEST['DELETEUSUARIO'])) {
    $idalma = $_REQUEST['id'];
    $query = "DELETE FROM USUARIO WHERE IDUSUARIO ='$idalma'";
    $q = mysqli_query($con, $query);
    if ($q) {
        echo "ok";
    } else {
        echo "No se pudo eliminar el usuario.";
    }
}
//READ
if (isset($_REQUEST['BGU'])) {
    $query = "SELECT * FROM USUARIO";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

if (isset($_REQUEST['BEUI'])) {
    $id = $_REQUEST['idusuario'];
    $query = "SELECT * FROM USUARIO WHERE IDUSUARIO = '$id'";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

if (isset($_REQUEST['BEU'])) {
    $Nomb = $_REQUEST['namea'];
    $query = "SELECT * FROM USUARIO WHERE NOMBRE Like '%$Nomb%'";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }
    echo json_encode($data);
}
if (isset($_REQUEST['BEC'])) {
    $cod_trabajador = $_REQUEST['cod_trabajador'];
    $query = "SELECT * FROM USUARIO WHERE COD_TRABAJADOR Like '%$cod_trabajador%'";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }
    echo json_encode($data);
}
if (isset($_REQUEST['BEUCN'])) {
    $Nomb = $_REQUEST['namea'];
    $cod_trabajador = $_REQUEST['cod_trabajador'];
    $query = "SELECT * FROM USUARIO WHERE COD_TRABAJADOR Like '%$cod_trabajador%' AND NOMBRE Like '%$Nomb%'";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }
    echo json_encode($data);
}
