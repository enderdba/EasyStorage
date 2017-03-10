$(document).ready(function ()
{
    $("#insert").click(function () {

        var user = encodeURIComponent($("#username").val());
        var password = $("#password").val();
        var dataString = "user=" + user + "&password=" + password + "&login=";
        console.log(user);
        if ($.trim(user).length > 0 & $.trim(password).length > 0)
        {
            $.ajax({
                type: "POST",
                url: "http://localhost/EasyStorage/webservice/login.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function () {
                    $("#insert").val('Connecting...');
                },
                success: function (data) {
                    if (data === "correcto") {
                        Materialize.toast('Contraseña correcta. Bienvenido!', 4000)
                        window.setTimeout(function () {
                            window.location = 'index.php';
                        }, 500);

                    } else if (data === "incorrecto") {
                        Materialize.toast('Contraseña Incorrecta o Usuario no existente.', 4000);
                    }
                    else {
                        Materialize.toast('Problemas con la conexión a la base de datos.', 4000);
                    }
                }
            });
        }
    });
});