$(document).ready(function () {
    $('.menu-items').tooltip({
        delay: 50
    });
    $('.menu-items').hide();
    $('.menu-items').show("fade", 1000);
    $('.login').hide();
    $('.login').show("fold", 1000);
    $('.search').hide();
    $('.search').show("fold", 1000);
    $('.table').hide();
    $('.buscar').on("click", function () {
        if ($("#input-min").val() > $("#input-max").val()) {
            alert("El peso mínimo es mayor al máximo.");
        } else {
            $('.table').show("fold", 1000);
        }
    });
    $('select').material_select();
    var a1 = $('.a1');
    var a2 = $('.a2');
    var tras = $('.traslado');
    a1.hide();
    a2.hide();
    tras.hide();
    $('#almacen1').change(function () {
        tras.show();
        a1.show();
    });
    $('#almacen2').change(function () {
        tras.show();
        a2.show();
    });

    $("#input-ini").datepicker();
    $("#input-fin").datepicker();

    $('.buscar-reporte').on("click", function () {
        var fecha1 = $("#input-ini").val();
        var fecha2 = $("#input-fin").val();
        console.log(fecha1);
        console.log(fecha2);

        if ($("#input-ini").val() && $("#input-fin").val()) {
            if (fecha1 > fecha2) {
                Materialize.toast("La fecha inicial es mayor a la final", 3000);
            } else {
                $('.table').show("fold", 1000);
            }
        } else {
            alert("Uno o dos campos están vacios.");
        }
    });
    $('.modal').modal();

});


