$(document).ready(function () {
    //variables globales
    var inputNombre, inputId, inputUnidadesLibres;
    var newNombre, newTamano;
    var modNombre, modTamano, modId;
    function actualizarValores() {
        inputNombre = $("#nombre").val();
        inputId = $("#id").val();
        inputUnidadesLibres = $('#filled-in-box').prop('checked');
        newNombre = $("#nombre_almacen").val();
        newTamano = $("#input-max").val();
        modNombre = $("#nombre_almacen_mod").val();
        modTamano = $("#input-max_mod").val();
        modId = $("#id_mod").val();
        console.log(inputUnidadesLibres);
    }

    $("#input-max").keyup(function () {
        if ($("#input-max").val() > 100) {
            $("#input-max").val(100);
        }
    });

    $("#input-max_mod").keyup(function () {
        console.log("ACTIVO COMPADRE EL MINIMO ES" + $("#input-max_mod").prop("min"));
        console.log("ESO QUIERE DECIR QUE EL ")
        if ($("#input-max_mod").val() > 100) {
            $("#input-max_mod").val(100);
        } else if ($("#input-max_mod").val() < $("#input-max_mod").prop("min")) {
            $("#input-max_mod").val(100);
        }
    });
    //CAMPOS
    //busqueda

    //creacion
    $("#nombre").val();
    $("#monto").val();

    //botones
    var buscar = $("#buscar");
    var crear = $("#crear");
    var editar = $("#editar");
    var eliminar = $("#eliminar");
    //EVENT LISTENERS
    function refreshResult() {
        actualizarValores();
        $('.table').hide();
        $("#almacenes").html("");

        //DECISIONES PARA BUSQUEDAS CON CRITERIOS
        //urlbase general
        var url = "webservice/servicios_almacen.php?BGA=";

        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDALMACEN;
                var nombre = field.NOMBRE;
                var unimax = field.UNIMAX;
                var unilibres = field.UNILIBRES;
                $("#almacenes").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + nombre + '</td>' +
                        '<td>' + unilibres + '</td>' +
                        '<td>' + unimax + '</td>' +
                        '<td><a data-target="' + id + '" class="storageshow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
            addEvents();
        });
    }
    function addEvents() {
        $(".storageshow").click(function () {
            console.log("aaaaa" + $(this).data("target"));
            $("#modal2").modal('open');
            actualizarValores();
            var selectedId = $(this).data("target");
            //busqueda con nombre
            selectedId = encodeURI(selectedId);
            url = "webservice/servicios_almacen.php?BEIO=&idalma=" + selectedId;
            console.log(url);

            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var id = field.IDALMACEN;
                    var nombre = field.NOMBRE;
                    var unimax = field.UNIMAX;
                    var unilibres = field.UNILIBRES;
                    $("#nombre_almacen_mod").val(nombre);
                    $("#input-max_mod").val(unimax);
                    $("#input-max_mod").prop("min", unimax);
                    $("#id_mod").val(id);
                });
            });
        });
    }
    crear.click(function () {
        actualizarValores();
        newNombre = encodeURI(newNombre);
        newTamano = encodeURI(newTamano);
        var url = "webservice/servicios_almacen.php";
        var dataString = "NEWALMACEN=&nombrea=" + newNombre + "&tamano=" + newTamano;
        if (!$.trim(newNombre).length > 0 && !$.trim(newTamano).length > 0) {
            Materialize.toast("Debe escribir en todos los campos para crear un almacén", 3000);
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
                Materialize.toast("Creando almacén", 2000);
            },
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Almacén creado correctamente!', 2000);
                    $('.modal').modal();
                } else {
                    Materialize.toast(data, 4000);
                    $('.modal').modal();
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
        var url = "webservice/servicios_almacen.php";
        var dataString = "DELETEALMACEN&idalma=" + modId;
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
                Materialize.toast("Eliminando almacén..", 2000);
            },
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Almacén eliminado correctamente!', 2000);
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
        modNombre = encodeURI(modNombre);
        modTamano = encodeURI(modTamano);
        console.log(" modId: " + modId + "modNombre: " + modNombre + " modTamano: " + modTamano);
        var url = "webservice/servicios_almacen.php";
        var dataString = "EDITALMACEN=&nombrea=" + modNombre + "&tamano=" + modTamano + "&idalma=" + modId;
        if (!$.trim(modNombre).length > 0 && !$.trim(modTamano).length > 0) {
            Materialize.toast("Debe escribir en todos los campos para editar un almacén", 3000);
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
                Materialize.toast("Editando almacén..", 2000);
            },
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Almacén editado correctamente!', 2000);
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
        $("#almacenes").html("");

        //DECISIONES PARA BUSQUEDAS CON CRITERIOS
        //urlbase general
        var url = "webservice/servicios_almacen.php?BGA=";

        //busqueda con nombre
        if (inputNombre) {
            inputNombre = encodeURI(inputNombre);
            url = "webservice/servicios_almacen.php?BEA=&namea=" + inputNombre;
            console.log(url);
        }
        if (inputId) {
            inputId = encodeURI(inputId);
            url = "webservice/servicios_almacen.php?BEI=&idalma=" + inputId;
            console.log(url);
        }
        if (inputNombre && inputId) {
            inputNombre = encodeURI(inputNombre);
            inputId = encodeURI(inputId);
            url = "webservice/servicios_almacen.php?BEAIDN=&namea=" + inputNombre + "&idalma=" + inputId;
            console.log(url);
        }

        //concateno al final la decision si tiene unidades libres o no
        if (inputUnidadesLibres) {
            url = url + "&uni_libres=true";
        }
        console.log(url);
        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDALMACEN;
                var nombre = field.NOMBRE;
                var unimax = field.UNIMAX;
                var unilibres = field.UNILIBRES;
                $("#almacenes").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + nombre + '</td>' +
                        '<td>' + unilibres + '</td>' +
                        '<td>' + unimax + '</td>' +
                        '<td><a data-target="' + id + '" class="storageshow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
            addEvents();
        });
    });
}
);
