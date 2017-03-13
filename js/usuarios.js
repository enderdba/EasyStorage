$(document).ready(function () {
    //variables globales
    //busqueda
    var searchName, searchCode;

    var newNombre, newCode, newType, newPassword, newEmail, newPhone;
    var modCode, modNombre, modId, modType, modPassword, modEmail, modPhone;


    function actualizarValores() {
        //busqueda
        searchName = $("#namesearch").val();
        searchCode = $("#codesearch").val();

        //crear
        newNombre = $("#newName").val();
        newCode = $("#newCode").val();
        newType = $("#newType").val();
        newPassword = $("#newPassword").val();
        newPhone = $("#newPhone").val();

        //modificar
        modId = $("#modId").val();
        modNombre = $("#modName").val();
        modCode = $("#modCode").val();
        modType = $("#modType").val();
        modPassword = $("#modPassword").val();
        modPhone = $("#modPhone").val();
    }

    //CAMPOS

    //botones
    var buscar = $("#buscar");
    var crear = $("#crear");
    var editar = $("#editar");
    var eliminar = $("#eliminar");

    //EVENT LISTENERS
    function refreshResult() {
        actualizarValores();
        $('.table').hide();
        $("#usertable").html("");

        //DECISIONES PARA BUSQUEDAS CON CRITERIOS
        //urlbase general
        var url = "webservice/servicios_almacen.php?BGU=";

        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDUSUARIO;
                var nombre = field.NOMBRE;
                var usertype = field.TIPODEUSUARIO_IDTIPODEUSUARIO;
                switch (usertype) {
                    case "1":
                        usertype = "Operador";
                        break;
                    case "2":
                        usertype = "Coordinador";
                        break;
                    default:
                        usertype = "NaN";
                        break;
                }

                $("#usertable").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + nombre + '</td>' +
                        '<td>' + usertype + '</td>' +
                        '<td><a data-target="' + id + '" class="usershow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
            addEvents();
        });
    }
    function addEvents() {
        $(".usershow").click(function () {
            console.log("aaaaa" + $(this).data("target"));
            $("#modal2").modal('open');
            actualizarValores();
            var selectedId = $(this).data("target");
            //busqueda con nombre
            selectedId = encodeURI(selectedId);
            url = "webservice/servicios_usuario.php?BEUI=&idusuario=" + selectedId;

            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var id = field.IDUSUARIO;
                    var nombre = field.NOMBRE;
                    var usertype = field.TIPODEUSUARIO_IDTIPODEUSUARIO;
                    var cod_trabajador = field.COD_TRABAJADOR;
                    var telefono = field.TELEFONO;
                    var pw = field.PASSWORD;

                    $("#modId").val(id);
                    $("#modName").val(nombre);
                    $("#modCode").val(cod_trabajador);
                    $("#option" + usertype).prop("selected", "true");
                    $("#modPassword").val(pw);
                    $("#modPhone").val(telefono);
                });
            });
        });
    }
    crear.click(function () {
        actualizarValores();
        newNombre = encodeURI(newNombre);
        newCode = encodeURI(newCode);
        newType = encodeURI(newType);
        newEmail = encodeURI(newEmail);
        newPassword = encodeURI(newPassword);
        newPhone = encodeURI(newPhone);
        var url = "webservice/servicios_usuario.php";
        var dataString = "NEWUSUARIO=&nombre=" + newNombre + "&usertype=" + newType + "&workerc=" + newCode + "&phone=" + newPhone + "&pwd=" + newPassword;
        if (!$.trim(newNombre).length > 0 && !$.trim(newType).length > 0 && !$.trim(newCode).length > 0 && !$.trim(newPhone).length > 0 && !$.trim(newPassword).length > 0) {
            Materialize.toast("Debe escribir en todos los campos para crear un usuario", 3000);
            return;
        }
        console.log(url + "?" + dataString);
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            timeout: 10000,
            beforeSend: function () {
                Materialize.toast("Creando usuario", 2000);
            },
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Usuario creado correctamente!', 2000);
                } else {
                    Materialize.toast(data, 4000);
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
            }
        });


        window.setTimeout(refreshResult(), 1000);
    });

    eliminar.click(function () {
        actualizarValores();
        console.log(" modId: " + modId);
        var url = "webservice/servicios_usuario.php";
        var dataString = "DELETEUSUARIO&id=" + modId;
        console.log(url + "?" + dataString);
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            async: false,
            timeout: 10000,
            beforeSend: function () {
                Materialize.toast("Eliminando usuario..", 2000);
            },
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Usuario eliminado correctamente!', 2000);
                } else {
                    Materialize.toast(data, 4000);
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
            }
        });
        window.setTimeout(refreshResult(), 1000);
    });

    editar.click(function () {
        actualizarValores();
        modId = encodeURI(modId);
        modNombre = encodeURI(modNombre);
        modCode = encodeURI(modCode);
        modType = encodeURI(modType);
        modPassword = encodeURI(modPassword);
        modPhone = encodeURI(modEmail);
        
        var url = "webservice/servicios_usuario.php";
        var dataString = "EDITUSUARIO=&nombre=" + modNombre + "&usertype=" + modType + "&workerc=" + modCode + "&phone=" + modPhone + "&pwd=" + modPassword + "&id=" + modId;
        if (!$.trim(modNombre).length > 0 && !$.trim(modCode).length > 0 && !$.trim(modType).length > 0 && !$.trim(modPassword).length > 0 && !$.trim(modEmail).length > 0 && !$.trim(modPhone).length > 0) {
            Materialize.toast("Debe escribir en todos los campos para editar un usuario", 3000);
            return;
        }

        console.log(url + "?" + dataString);
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            async: false,
            timeout: 10000,
            beforeSend: function () {
                Materialize.toast("Editando usuario..", 2000);
            },
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Usuario editado correctamente!', 2000);
                } else {
                    Materialize.toast(data, 4000);
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
            }
        });
        window.setTimeout(refreshResult(), 1000);
    });

    buscar.click(function () {
        actualizarValores();
        $('.table').hide();
        $("#usertable").html("");

        //DECISIONES PARA BUSQUEDAS CON CRITERIOS
        //urlbase general
        var url = "webservice/servicios_usuario.php?BGU=";
        console.log(url);
        //busqueda con nombre
        if (searchName) {
            searchName = encodeURI(searchName);
            url = "webservice/servicios_usuario.php?BEU=&namea=" + searchName;
            console.log(url);
        }
        if (searchCode) {
            searchCode = encodeURI(searchCode);
            url = "webservice/servicios_usuario.php?BEC=&cod_trabajador=" + searchCode;
            console.log(url);
        }
        if (searchName && searchCode) {
            searchName = encodeURI(searchName);
            searchCode = encodeURI(searchCode);
            url = "webservice/servicios_usuario.php?BEUCN=&namea=" + searchName + "&cod_trabajador=" + searchCode;
            console.log(url);
        }

        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDUSUARIO;
                var nombre = field.NOMBRE;
                var usertype = field.TIPODEUSUARIO_IDTIPODEUSUARIO;
                var codtrabajador = field.COD_TRABAJADOR;
                //selector para tipo de usuario
                switch (usertype) {
                    case "1":
                        usertype = "Operador";
                        break;
                    case "2":
                        usertype = "Coordinador";
                        break;
                    default:
                        usertype = "NaN";
                        break;
                }
                $("#usertable").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + nombre + '</td>' +
                        '<td>' + usertype + '</td>' +
                        '<td>' + codtrabajador + '</td>' +
                        '<td><a data-target="' + id + '" class="usershow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
            console.log($(".table").html());
            addEvents();
        });
    });
}
);
