$(document).ready(function () {
    var valTamaño;
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
        $("#almacen1").append('<option value="" disabled selected>Seleccione un almacén</option>');
        $.each(result, function (i, field) {
            var id = field.IDALMACEN;
            var nombre = field.NOMBRE;
            $("#almacen1").append('<option value="' + id + '">' + nombre + '</option>');
        });
    });
    $('.table').show("fold", 1000);
    $('select').material_select();
    console.log($('#almacen2').html());

    $.getJSON(url, function (result) {
        console.log(result);
        $("#almacen2").append('<option value="" disabled selected>Seleccione un almacén</option>');
        $.each(result, function (i, field) {
            var id = field.IDALMACEN
            var nombre = field.NOMBRE;
            $("#almacen2").append('<option value="' + id + '">' + nombre + '</option>');
        });
    });
    $('.table').show("fold", 1000);
    $('select').material_select();
    console.log($('#almacen2').html());
    $("select").change(function () {
        var stId = $(this).val();
        if ($(this).prop("id") === "almacen1") {
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
                            '<td><a data-target="' + id + '" class="storageshow waves-effect waves-light btn orange darken-3">mover</a></td></tr>');
                });
            });
        }
        else {
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

            console.log("SOY DEL 2");
        }
    });
});
