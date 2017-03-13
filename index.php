<?php
include('header.php');
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="container" style="width: 49%; margin-top: 20px">
        <div class="center card menu-container center z-depth-1">
            <h3 style="margin-top:30px;" class=" container  center white-text">Menú Principal</h3>
            <hr>
            <div class="card-content white-text">
                <span class="card-title">Bienvenido, usuario <span id="username_index">%nombre_de_usuario%</span> </span>
                <p>Usted posee un rol actual de <span id="role_index">Administrador</span>.</p>
            </div>
            <div id="menuOptions">
                <div id="menuStorage" class="menu-items" data-tooltip="Consulta datos registrados de los almacenes." onclick="window.location = 'BuscarAlmacen.php';">
                    <h5><i class="material-icons">storage</i></h5>
                    <a>Consultar Almacenes</a>
                </div>
                <div id="menuContainer" class="menu-items" data-tooltip="Consulta datos registrados de los contenedores." onclick="window.location = 'BuscarContenedor.php';">
                    <h5><i class="material-icons">inbox</i></h5>
                    <a>Consultar Contenedores</a>
                </div>
                <div id="menuTraslado" class="menu-items" data-tooltip="Desde aquí se puede realizar traslados y se puede cancelar la solicitud del mismo." onclick="window.location = 'GestionTraslados.php';">
                    <h5><i class="material-icons">transform</i></h5>
                    <a>Gestión de Traslados</a>
                </div>
                <br>
                <div id="menuReporte" class="menu-items" data-tooltip="Generar reportes desde y hasta una fecha aproximada." onclick="window.location = 'GestionReportes.php';">
                    <h5><i class="material-icons">content_copy</i></h5>
                    <a>Gestión de Reportes</a>
                </div>
                <div id="menuRespaldo" class="menu-items" data-tooltip="Gestión y admistración de usuarios." onclick="window.location = 'AdministrarUsuario.php';">
                    <h5><i class="material-icons">build</i></h5>
                    <a>Gestión de Usuarios</a>
                </div>
            </div>
            <div id="normalOptions">
                <div id="menuStorage" class="menu-items" data-tooltip="Consulta datos registrados de los almacenes." onclick="window.location = 'BuscarAlmacen.php';">
                    <h5><i class="material-icons">storage</i></h5>
                    <a>Consultar Almacenes</a>
                </div>
                <div id="menuContainer" class="menu-items" data-tooltip="Consulta datos registrados de los contenedores." onclick="window.location = 'BuscarContenedor.php';">
                    <h5><i class="material-icons">inbox</i></h5>
                    <a>Consultar Contenedores</a>
                </div>
                <div id="menuRespaldo" class="menu-items" data-tooltip="Gestión y admistración de usuarios." onclick="window.location = 'AdministrarUsuario.php';">
                    <h5><i class="material-icons">build</i></h5>
                    <a>Gestión de Usuarios</a>
                </div>
            </div>
        </div>
    </div>


    <?php
    include("footer.php");
    