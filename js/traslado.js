$(document).ready(function () {
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
            $("#almacen2").append('<option value="' + i + '">' + nombre + '</option>');
        });
    });
    $('.table').show("fold", 1000);
    $('select').material_select();
    console.log($('#almacen2').html());
    $("select").change(function () {
        if ($(this).prop("id") === "almacen1") {
            $.each(result, function (i, field) {
                var id = field.IDCONTENEDOR;
                var lote = field.LOTE;
                var tamaño = field.UNIDADES;
                var almacenAso = field.NOMBRE;
                validarTamaño(tamaño);
                $("#contenedores").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + lote + '</td>' +
                        '<td>' + valTamaño + '</td>' +
                        '<td>' + almacenAso + '</td>' +
                        '<td><a class="storageshow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
        }
        else {
            console.log("SOY DEL 2");
        }
    });
});
