$(document).ready(function () {
    var userId = sessionStorage.getItem("id");
    var username = sessionStorage.getItem("username");
    var userType = sessionStorage.getItem("usertype");
    var indexExists = $("#login-index").html();
    var nav = $("#nav-mobile");
    var menuStorage = $("#menuStorage");
    var menuContainer = $("#menuContainer");
    var menuTraslado = $("#menuTraslado");
    var menuRespaldo = $("#menuRespaldo");
    var menuOptions = $("#menuOptions");
    var normalOptions = $("#normalOptions");
    if (!userId && !indexExists) {
        window.location = "login.php";
    } else if (userId) {
        $("#logore").prop("href", "index.php");
    }
    $("#username_index").html(username);

    //SELECCION DE TIPO DE USUARIO
    switch (userType) {
        case "1":
            nav.append('<li><a href="BuscarAlmacen.php">Almacenes</a></li>' +
                    '<li><a href="BuscarContenedor.php">Contenedores</a></li>' +
                    '<li><a href="GestionReportes.php">Reportes</a></li>' +
                    '<li><a id="cerrarSesion"href="login.php">Cerrar Sesión</a></li>');
            menuOptions.hide();

            break;

        case "2":
            nav.append('<li><a href="BuscarAlmacen.php">Almacenes</a></li>' +
                    '<li><a href="BuscarContenedor.php">Contenedores</a></li>' +
                    '<li><a href="GestionTraslados.php">Traslados</a></li>' +
                    '<li><a href="GestionReportes.php">Reportes</a></li>' +
                    '<li><a href="AdministrarUsuario.php">Usuarios</a></li>' +
                    '<li><a id="cerrarSesion" href="login.php">Cerrar Sesión</a></li>');
            normalOptions.hide();
            break;
        default:
            nav.append('<li><a href="login.php">Iniciar Sesión</a></li>');
            break;
    }
    console.log(userType);

    switch (userType) {

        case "1":
            userType = "Operador";

            break;

        case "2":
            userType = "Coordinador";
            break;

    }
    $("#role_index").html(userType);
    $("#cerrarSesion").click(function () {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("usertype");
    });

});