$(document).ready(function () {
    var userId = sessionStorage.getItem("id");
    var username = sessionStorage.getItem("username");
    var userType = sessionStorage.getItem("usertype");
    var nav = $("#nav-mobile");
    console.log(userType);
    //SELECCION DE TIPO DE USUARIO
    switch (userType) {
        case "1":
            nav.append('<li><a href="BuscarAlmacen.php">Almacenes</a></li>' +
                    '<li><a href="BuscarContenedor.php">Contenedores</a></li>' +
                    '<li><a href="GestionReportes.php">Reportes</a></li>' +
                    '<li><a id="cerrarSesion"href="login.php">Cerrar Sesión</a></li>');
            break;

        case "2":
            nav.append('<li><a href="BuscarAlmacen.php">Almacenes</a></li>' +
                    '<li><a href="BuscarContenedor.php">Contenedores</a></li>' +
                    '<li><a href="GestionTraslados.php">Traslados</a></li>' +
                    '<li><a href="GestionReportes.php">Reportes</a></li>' +
                    '<li><a href="Herramientas.php">Utilidades</a></li>' +
                    '<li><a id="cerrarSesion" href="login.php">Cerrar Sesión</a></li>');
            break;
        default:
            nav.append('<li><a href="login.php">Iniciar Sesión</a></li>');
            break;
    }

    $("#cerrarSesion").click(function () {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("usertype");
    });

//                                    sessionStorage.setItem("id", field.IDUSUARIO);
//                                sessionStorage.setItem("username", field.NOMBRE);
//                                sessionStorage.setItem("usertype", field.TIPODEUSUARIO_IDTIPODEUSUARIO);
});