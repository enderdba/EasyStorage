$(document).ready(function () {
    var userId = sessionStorage.getItem("id");
    var username = sessionStorage.getItem("username");
    var userType = sessionStorage.getItem("usertype");
    var indexExists = $("#login-index").html();
    var nav = $("#nav-mobile");

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

    switch (userType) {

        case "1":
            userType = "Operador";

            break;

        case "2":
            userType = "Administrador";
            break;

    }

    $("#cerrarSesion").click(function () {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("usertype");
    });

});