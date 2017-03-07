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
        }
        else {
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

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $('.buscar-reporte').on("click", function () {
        var fecha1 = new Date($("#input-ini").val());
        var fecha2 = new Date($("#input-fin").val());

        if ($("#input-ini").val() && $("#input-fin").val()) {
            if (Date.parse(fecha1) > Date.parse(fecha2)) {
                alert("La fecha inicial es mayor a la final");
            }
            else {
                $('.table').show("fold", 1000);
            }
        }
        else {
            alert("Uno o dos campos están vacios.");
        }
    });
    $('.modal').modal();

});


