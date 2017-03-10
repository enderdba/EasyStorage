$(document).ready(function () {
    //variables globales
    var inputNombre, inputId, inputUnidadesLibres;
    var newNombre, newTamano;
    function actualizarValores() {
        inputNombre = $("#nombre").val();
        inputId = $("#id").val();
        inputUnidadesLibres = $('#filled-in-box').prop('checked');
        newNombre = $("#nombre_almacen").val();
        newTamano = $("#input-max").val();
        console.log(inputUnidadesLibres);
    }

    //CAMPOS
    //busqueda

    //creacion
    $("#nombre").val();
    $("#monto").val();

    //botones
    var buscar = $("#buscar");
    var crear = $("#crear");

    //EVENT LISTENERS
    crear.click(function () {
        actualizarValores();
        newNombre = encodeURI(newNombre);
        newTamano = encodeURI(newTamano);
        var url = "webservice/Servicios.php";
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
        });
    });

    buscar.click(function () {
        actualizarValores();
        $('.table').hide("fold", 1000);
        $("#almacenes").html("");

        //DECISIONES PARA BUSQUEDAS CON CRITERIOS
        //urlbase general
        var url = "webservice/Servicios.php?BGA=";

        //busqueda con nombre
        if (inputNombre) {
            inputNombre = encodeURI(inputNombre);
            url = "webservice/Servicios.php?BEA=&namea=" + inputNombre;
            console.log(url);
        }
        if (inputId) {
            inputId = encodeURI(inputId);
            url = "webservice/Servicios.php?BEI=&idalma=" + inputId;
            console.log(url);
        }
        if (inputNombre && inputId) {
            inputNombre = encodeURI(inputNombre);
            inputId = encodeURI(inputId);
            url = "webservice/Servicios.php?BEAIDN=&namea=" + inputNombre + "&idalma=" + inputId;
            console.log(url);
        }

        //concateno al final la decision si tiene unidades libres o no
        if (inputUnidadesLibres === "true") {
            url = url + "&uni_libres=true";
        }

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
                        '<td><a class="waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
        });
    });
}
);
