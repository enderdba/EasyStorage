$(document).ready(function () {

    $("#limpiar").click(function () {
        $("#almacen1").prop("disabled", false);
        $("#almacen2").prop("disabled", true);
        $("#contenedores1").html("");
        $("#contenedores2").html("");
        $("#selected1").prop("selected", true);
        $("#selected2").prop("selected", true);
        $(".traslado").hide("fold", 1000);
    });

    var valTamaño;
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
            $("#almacen1").append('<option data-libre="' + libre + '" data-max="' + max + '" value="' + id + '">' + nombre + '</option>');
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
            $('option [value="' + stId + '"]').prop("disabled", true);
            $("#contenedores1").html("");
            url = "webservice/servicios_contenedor.php?BGCID=&idalma=" + stId;
            console.log(url);
            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    var id = field.IDCONTENEDOR;
                    var lote = field.LOTE;
                    var tamaño = field.TAMANO_IDTAMANO;
                    validarTamaño(tamaño);
                    $("#contenedores1").append('<tr>' +
                            '<td>' + id + '</td>' +
                            '<td>' + lote + '</td>' +
                            '<td>' + valTamaño + '</td>' +
                            '<td><a data-target="' + id + '"class="storageshow waves-effect waves-light btn orange darken-3">mover</a></td></tr>');
                });
            }).done(function () {
                var url = "webservice/servicios_almacen.php?BGA=";
                $.getJSON(url, function (result) {
                    console.log(result);
                    $("#almacen2").append('<option id="selected2" value="" disabled selected>Seleccione un almacén destino</option>');
                    $.each(result, function (i, field) {
                        var id = field.IDALMACEN;
                        var nombre = field.NOMBRE;
                        if (stId === id) {
                            return true;
                        }
                        $("#almacen2").append('<option value="' + id + '">' + nombre + '</option>');
                    });
                });
            });

            $("#almacen2").prop("disabled", false);
            $(this).prop("disabled", true);
        } else {
            $("#contenedores2").html("");
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
