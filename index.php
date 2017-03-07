<?php
include('header.php');
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="container" style="width: 49%; margin-top: 20px">
        <div class="center card menu-container center z-depth-1">
            <h3 style="margin-top:30px;" class=" container  center white-text">Menú Principal</h3>
            <hr>
            <div class="card-content white-text">
                <span class="card-title">Bienvenido, usuario %nombre_de_usuario% </span>
                <p>Usted posee un rol actual de Administrador.<br>
                    La fecha de su ultima sesión fué:</p>
            </div>
            <div class="menu-items" data-tooltip="Consulta datos registrados de los almacenes." onclick="window.location = 'BuscarAlmacen.php';">
                <h5><i class="material-icons">storage</i></h5>
                <a>Consultar Almacenes</a>
            </div>

            <div class="menu-items" data-tooltip="Consulta datos registrados de los contenedores." onclick="window.location = 'BuscarContenedor.php';">
                <h5><i class="material-icons">inbox</i></h5>
                <a>Consultar Contenedores</a>
            </div>
            <div class="menu-items" data-tooltip="Desde aquí se puede realizar traslados y se puede cancelar la solicitud del mismo." onclick="window.location = 'GestionTraslados.php';">
                <h5><i class="material-icons">transform</i></h5>
                <a>Gestión de Traslados</a>
            </div>
            <div class="menu-items" data-tooltip="Generar reportes desde y hasta una fecha aproximada." onclick="window.location = 'GestionReportes.php';">
                <h5><i class="material-icons">content_copy</i></h5>
                <a>Gestión de Reportes</a>
            </div>
            <div class="menu-items" data-tooltip="Gestión de respaldos de base de datos y admistración de usuarios." onclick="window.location = 'Herramientas.php';">
                <h5><i class="material-icons">build</i></h5>
                <a>Utilidades y Herramientas</a>
            </div>
        </div>
    </div>


    <?php
    include("footer.php");
    