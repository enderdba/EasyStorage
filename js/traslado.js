$(document).ready(function () {

    function actualizarAlmacenes() {
        var stId = $("#almacen1").val();
        $("#contenedores1").html("");
        var url = "webservice/servicios_almacen.php?BEIO=&idalma=" + stId;
        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var nombre = field.NOMBRE;
                var max = field.UNIMAX;
                var libre = field.UNILIBRES;
                libre = max - libre;
                $("#a1-name").html(nombre);
                $("#a1-libre").html(libre);
                $("#a1-max").html(max);
            });
        });
        url = "webservice/servicios_contenedor.php?BGCID=&idalma=" + stId;
        console.log(url);
        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDCONTENEDOR;
                var lote = field.LOTE;
                var tamaño = field.TAMANO_IDTAMANO;
                var idalma = field.ALMACEN_IDALMACEN;
                validarTamaño(tamaño);
                $("#contenedores1").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + lote + '</td>' +
                        '<td>' + valTamaño + '</td>' +
                        '<td><a data-almacen="' + idalma + '" data-tamano= "' + valTamaño + '" data-target="' + id + '"class="mover waves-effect waves-light btn orange darken-3">mover</a></td></tr>');
            });
        });
        $("#contenedores2").html("");
        stId = $("#almacen2").val();
        var url = "webservice/servicios_almacen.php?BEIO=&idalma=" + stId;
        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDALMACEN;
                var nombre = field.NOMBRE;
                var max = field.UNIMAX;
                var libre = field.UNILIBRES;
                libre = max - libre;
                $("#a2-name").html(nombre);
                idDestino = id;
                $("#a2-libre").html(libre);
                $("#a2-max").html(max);
            });
        });
        url = "webservice/servicios_contenedor.php?BGCID=&idalma=" + stId;
        console.log(url);
        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDCONTENEDOR;
                var lote = field.LOTE;
                var tamaño = field.TAMANO_IDTAMANO;
                validarTamaño(tamaño);
                $("#contenedores2").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + lote + '</td>' +
                        '<td>' + valTamaño + '</td>');
            });
        });

    }

    $("#limpiar").click(function () {
        $("#almacen1").prop("disabled", false);
        $("#almacen2").prop("disabled", true);
        $("#almacen2").html("");
        $("#contenedores1").html("");
        $("#contenedores2").html("");
        $("#selected1").prop("selected", true);
        $("#selected2").prop("selected", true);
        $(".traslado").hide("fold", 1000);
        $("#a2-name").html("Selecciona un almacen");
        $("#a2-libre").html("min");
        $("#a2-max").html("max");
        $("#a2-name").prop("data-almacen", "");
    });

    var valTamaño;
    var valTamaño2;
    var idDestino;
    $("#almacen2").prop("disabled", true);
    function validarTamaño(tamaño) {
        if (tamaño === "1") {
            valTamaño = "Pequeño";
        } else if (tamaño === "2") {
            valTamaño = "Mediano";
        } else if (tamaño === "3") {
            valTamaño = "Grande";
        } else {
            valTamaño = "Esto no deberia aparecer";
        }
    }

    function addEvents() {
        $(".mover").click(function () {
            //obtener variables para trabajo
            var emiId = $(this).data("target");
            var emiTam = $(this).data("tamano");
            var emiLib = parseInt($("#a1-libre").html());
            var emiMax = parseInt($("#a1-max").html());
            var destLib = parseInt($("#a2-libre").html());
            var destMax = parseInt($("#a2-max").html());
            var emiAlmaId = $(this).data("almacen");
            validarTamañoReverse(emiTam);
            console.log(parseInt(valTamaño2) + parseInt(destLib));
            idDestino = $("#almacen2").val();
            if (!idDestino) {
                Materialize.toast("No ha seleccionado un almacén destino aún.", 3000);
                return;
            }
            if ((parseInt(valTamaño2) + destLib) > destMax) {
                console.log("Sobrepasa los limites.");
                Materialize.toast("No se puede realizar el traslado debido a que el almacen destino está muy lleno.", 2000);
            } else {
                var url = "webservice/servicios_contenedor.php";
                var dataString = "MOVERCONT&idalma=" + idDestino + "&idcont=" + emiId;
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
                        Materialize.toast("Moviendo contenedor...", 2000);
                    },
                    success: function (data) {
                        if (data === "ok") {
                            Materialize.toast('Contenedor trasladado exitosamente!', 2000);
                        } else {
                            Materialize.toast(data, 4000);
                        }
                    },
                    error: function () {
                        Materialize.toast("Se agotó el tiempo de espera del servidor.");
                    }
                }).done(function () {
                    var url2 = "webservice/servicios_contenedor.php";
                    console.log("HEY EL MAX ES = " + emiMax + "Y EL LIBRE ES " + emiLib);
                    var dataString2 = "UPDATEALMID=&idalma=" + emiAlmaId + "&tam=" + valTamaño2 + "&uni=" + (emiMax - emiLib);
                    console.log("dataString2 : " + dataString2);
                    $.ajax({
                        type: "POST",
                        url: url2,
                        data: dataString2,
                        crossDomain: true,
                        cache: false,
                        timeout: 10000,
                        success: function (data) {
                            if (data === "ok") {
                                Materialize.toast('Se actualizaron las unidades del almacen asociado!', 2000);
                            } else {
                                Materialize.toast(data, 10000);
                            }
                        },
                        error: function () {
                            Materialize.toast("Se agotó el tiempo de espera del servidor.");
                        }
                    });
                    console.log(emiId + " e " + idDestino + valTamaño);
                }).done(function () {
                    var url2 = "webservice/servicios_contenedor.php";
                    var dataString2 = "UPDATEALMID2=&idalma=" + idDestino + "&tam=" + valTamaño2 + "&uni=" + (destMax - destLib);
                    console.log("dataString2 : " + dataString2);
                    $.ajax({
                        type: "POST",
                        url: url2,
                        data: dataString2,
                        crossDomain: true,
                        cache: false,
                        timeout: 10000,
                        success: function (data) {
                            if (data === "ok") {
                                actualizarAlmacenes();
                            } else {
                                Materialize.toast(data, 10000);
                            }
                        },
                        error: function () {
                            Materialize.toast("Se agotó el tiempo de espera del servidor.");
                        }
                    });
                }).done(function () {
                    var url = "webservice/servicios_traslado.php";
                    var dataString = "TRI=&+idcont=" + emiId + "&idalma1=" + emiAlmaId + "&idalma2=" + idDestino;
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
                        },
                        success: function (data) {
                            FF
                            if (data === "ok") {
                            } else {
                                Materialize.toast(data, 4000);
                            }
                        },
                        error: function () {
                            Materialize.toast("Se agotó el tiempo de espera del servidor.");
                        }


                    });
                });

            }


        });
    }

    function validarTamañoReverse(tam) {
        if (tam === "Pequeño") {
            valTamaño2 = "1";
        } else if (tam === "Mediano") {
            valTamaño2 = "2";
        } else if (tam === "Grande") {
            valTamaño2 = "3";
        } else {
            valTamaño2 = "Esto no deberia aparecer";
        }
    }

    console.log("HOLAA");
    var url = "webservice/servicios_almacen.php?BGA=";
    $.getJSON(url, function (result) {
        console.log(result);
        $("#almacen1").append('<option id="selected1" value="" disabled selected>Seleccione un almacén</option>');
        $.each(result, function (i, field) {
            var id = field.IDALMACEN;
            var nombre = field.NOMBRE;
            var max = field.UNIMAX;
            var libre = field.UNILIBRES;
            $("#almacen1").append('<option data-name="' + nombre + '" data-libre="' + libre + '" data-max="' + max + '" value="' + id + '">' + nombre + '</option>');
        });
    });
    $('.table').show("fold", 1000);
    $('select').material_select();
    console.log($('#almacen2').html());

    $('.table').show("fold", 1000);
    $('select').material_select();
    console.log($('#almacen2').html());

    //event
    $("select").change(function () {
        var stId = $(this).val();
        if ($(this).prop("id") === "almacen1") {
            $("#contenedores1").html("");
            var url = "webservice/servicios_almacen.php?BEIO=&idalma=" + stId;
            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var nombre = field.NOMBRE;
                    var max = field.UNIMAX;
                    var libre = field.UNILIBRES;
                    libre = max - libre;
                    $("#a1-name").html(nombre);
                    $("#a1-libre").html(libre);
                    $("#a1-max").html(max);
                });
            });
            url = "webservice/servicios_contenedor.php?BGCID=&idalma=" + stId;
            console.log(url);

            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var id = field.IDCONTENEDOR;
                    var lote = field.LOTE;
                    var tamaño = field.TAMANO_IDTAMANO;
                    var idalma = field.ALMACEN_IDALMACEN;
                    validarTamaño(tamaño);
                    $("#contenedores1").append('<tr>' +
                            '<td>' + id + '</td>' +
                            '<td>' + lote + '</td>' +
                            '<td>' + valTamaño + '</td>' +
                            '<td><a data-almacen="' + idalma + '" data-tamano= "' + valTamaño + '" data-target="' + id + '"class="mover waves-effect waves-light btn orange darken-3">mover</a></td></tr>');
                });
            }).always(function () {
                addEvents();
                console.log("LO ARE");
                var url = "webservice/servicios_almacen.php?BGA=";
                $.getJSON(url, function (result) {
                    console.log(result);
                    $("#almacen2").append('<option id="selected2" value="" disabled selected>Seleccione un almacén destino</option>');
                    $.each(result, function (i, field) {
                        var id = field.IDALMACEN;
                        var nombre = field.NOMBRE;
                        console.log("id a agregar= " + id);
                        if (stId !== id) {
                            console.log("id agregado= " + id);
                            $("#almacen2").append('<option value="' + id + '">' + nombre + '</option>');
                        }
                    });
                });
            });

            $("#almacen2").prop("disabled", false);
            $(this).prop("disabled", true);
        } else {
            $("#contenedores2").html("");
            var url = "webservice/servicios_almacen.php?BEIO=&idalma=" + stId;
            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var id = field.IDALMACEN;
                    var nombre = field.NOMBRE;
                    var max = field.UNIMAX;
                    var libre = field.UNILIBRES;
                    libre = max - libre;
                    $("#a2-name").html(nombre);
                    idDestino = id;
                    $("#a2-libre").html(libre);
                    $("#a2-max").html(max);
                });
            });
            url = "webservice/servicios_contenedor.php?BGCID=&idalma=" + stId;
            console.log(url);
            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var id = field.IDCONTENEDOR;
                    var lote = field.LOTE;
                    var tamaño = field.TAMANO_IDTAMANO;
                    validarTamaño(tamaño);
                    $("#contenedores2").append('<tr>' +
                            '<td>' + id + '</td>' +
                            '<td>' + lote + '</td>' +
                            '<td>' + valTamaño + '</td>');
                });
            });
            $("#almacen2").prop("disabled", false);
            console.log("SOY DEL 2");
        }
    });
});
