<?php

//-->SERVICIOS CONTENEDORES

//BUSQUEDA GENERAL
if (isset($_REQUEST['BGC'])) {
    $query = "SELECT * FROM CONTENEDOR";
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//BUSQUEDA POR NORMBRE
if (isset($_REQUEST['BECN'])) {
    $NombC = $_REQUEST['namec'];
    $query = "SELECT * FROM CONTENEDOR WHERE NOMBRE Like '%$NombC%'";
    if(isset($_REQUEST['esp'])){
        $query += " AND TAMAÑO = 'Pequeño'";
    }else if(isset ($_REQUEST['esm'])){
        $query += " AND TAMAÑO = 'Mediano'";
    }else if(isset ($_REQUEST['esg'])){
        $query += " AND TAMAÑO = 'Grande'";
    }
    
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//BUSQUEDA POR ID
if (isset($_REQUEST['BECI'])) {
    $id = $_REQUEST['id'];
    $query = "SELECT * FROM CONTENEDOR WHERE ID Like '%$id%'";
    if(isset($_REQUEST['esp'])){
        $query += " AND TAMAÑO = 'Pequeño'";
    }else if(isset ($_REQUEST['esm'])){
        $query += " AND TAMAÑO = 'Mediano'";
    }else if(isset ($_REQUEST['esg'])){
        $query += " AND TAMAÑO = 'Grande'";
    }
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}

//BUSQUEDA COMBINADITA
if (isset($_REQUEST['BECNI'])) {
    $id = $_REQUEST['id'];
    $NombC = $_REQUEST['namec'];
    $query = "SELECT * FROM CONTENEDOR WHERE ID Like '%$id%' AND NOMBRE Like '%$NombC%'";
    if(isset($_REQUEST['esp'])){
        $query += " AND TAMAÑO = 'Pequeño'";
    }else if(isset ($_REQUEST['esm'])){
        $query += " AND TAMAÑO = 'Mediano'";
    }else if(isset ($_REQUEST['esg'])){
        $query += " AND TAMAÑO = 'Grande'";
    }
    $q = mysqli_query($con, $query);
    while ($row = mysqli_fetch_object($q)) {
        $data[] = $row;
    }

    echo json_encode($data);
}
