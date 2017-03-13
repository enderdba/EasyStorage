$(document).ready(function ()
{   
    $("#insert").click(function () {

        var user = encodeURIComponent($("#username").val());
        var password = $("#password").val();
        var dataString = "user=" + user + "&password=" + password + "&login1=";
        console.log(user);
        console.log(dataString);
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
                        Materialize.toast('Contraseña correcta. Bienvenido!', 4000);
                        dataString = "http://localhost/EasyStorage/webservice/login.php?" + "user=" + user + "&password=" + password + "&login2=";
                        $.getJSON(dataString, function (result) {
                            var is = 0;
                            $.each(result, function (i, field) {
                                is++;
                                sessionStorage.setItem("id", field.IDUSUARIO);
                                sessionStorage.setItem("username", field.NOMBRE);
                                sessionStorage.setItem("usertype", field.TIPODEUSUARIO_IDTIPODEUSUARIO);
                            });
                            if (is === 0) {
                                Materialize.toast('ERROR DE INICIO DE SESIÓN');
                                return;
                            }
                        });
                        window.setTimeout(function () {
                            window.location = 'index.php';
                        }, 500);

                    } else if (data === "incorrecto") {
                        Materialize.toast('Contraseña Incorrecta o Usuario no existente.', 4000);
                    } else {
                        Materialize.toast('Problemas con la conexión a la base de datos.', 4000);
                    }
                }
            });
        }
    });
});