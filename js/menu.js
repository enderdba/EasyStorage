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

    


});


