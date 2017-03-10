<?php
include('header.php');
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="container" style="width: 49%; margin-top: 20px">
        <div class="center card menu-container center z-depth-1">
            <h2 style="padding: 20px; margin-top:30px; border-radius:20px;" class="container center white-text">Herramientas y Utilidades</h2>
            <hr>
            <div class="menu-items" data-tooltip="Agrega, modifica o elimina usuarios." onclick="window.location = 'AdministrarUsuario.php';">
                <h3><i class="material-icons">group</i></h3>
                <a>Administrar Usuarios</a>
            </div>

            <div class="menu-items" data-tooltip="Genera respaldos de base de datos y gestiona los creados" onclick="window.location = 'GestionRespaldo.php';">
                <h3><i class="material-icons">save</i></h3>
                <a>Gestión de Respaldos</a>
            </div>
        </div>
    </div>
</body>
<?php
include("footer.php");
