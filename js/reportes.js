$(document).ready(function () {
//   buscar.click(function () {
//        actualizarValores();
//        $('.table').hide("fold", 1000);
//        $("#contenedores").html("");
//    });
    
    function arreglarFecha(f){
        var fecha = new Date(f);
        var dia = fecha.getDate();
        if(fecha.getDate() < 10){
            dia = "0" + dia;
        }
        var mes = fecha.getMonth() + 1;
        if(fecha.getMonth() < 10){
            mes = "0" + mes;
        }
        var anno = fecha.getFullYear();
        var fecha_final = anno + "/" + mes + "/" + dia;
        return fecha_final;
    };
    
    
    
    $('.buscar-reporte').on("click", function () {
        $('.table').hide("fold", 1000);
        var f_inicial = $("#input-ini").val();
        var f_final = $("#input-fin").val();
        console.log(arreglarFecha(f_inicial));
        if ( f_inicial) {
            if (arreglarFecha(f_inicial) > arreglarFecha(new Date())) {
                Materialize.toast("La fecha a evaluar no puede ser mayor al dia de hoy", 5000);
                return;
            }
        }

        if ($("#input-ini").val() && $("#input-fin").val()) {
            if (f_inicial > f_final) {
                Materialize.toast("La fecha inicial es mayor a la final", 5000);
            } else if(arreglarFecha(f_final) > arreglarFecha(new Date())){
                Materialize.toast("La fecha final es mayor a la fecha de hoy", 5000);
            } else {
                $("#reportes").html("");
                var url = "webservice/servicios_reportes.php?ESPECIFICO=&fecha1="+arreglarFecha(f_inicial)+"&fecha2="+arreglarFecha(f_final);
                $.getJSON(url, function (result) {
                    console.log(result);

                    $.each(result, function (i, field) {
                        var id = field.idtraslado;
                        var fecha = field.fecha;
                        var contenedor = field.contenedor;
                        var almacen1 = field.almacen1;
                        var almacen2 = field.almacen2;
                        $("#reportes").append('<tr>' +
                                '<td>' + id + '</td>' +
                                '<td>' + contenedor + '</td>' +
                                '<td>' + almacen1 + '</td>' +
                                '<td>' + almacen2 + '</td>' +
                                '<td>' + fecha + '</td>');
                    });
                });
                $('.table').show("fold", 1000);
            }
        } else if (!f_inicial && f_final){
            Materialize.toast("Se debe especificar una fecha inicial",5000);
        } else if (f_inicial){
//            Materialize.toast("busqueda solo desde",5000);
            $("#reportes").html("");
            var url = "webservice/servicios_reportes.php?INICIAL=&fecha=" + arreglarFecha(f_inicial);
            $.getJSON(url, function (result) {
                console.log(result);

                $.each(result, function (i, field) {
                    var id = field.idtraslado;
                    var fecha = field.fecha;
                    var contenedor = field.contenedor;
                    var almacen1 = field.almacen1;
                    var almacen2 = field.almacen2;
                    $("#reportes").append('<tr>' +
                            '<td>' + id + '</td>' +
                            '<td>' + contenedor + '</td>' +
                            '<td>' + almacen1 + '</td>' +
                            '<td>' + almacen2 + '</td>' +
                            '<td>' + fecha + '</td>');
                });
            });
            $('.table').show("fold", 1000);
        } else {
//            Materialize.toast("busqueda general",5000);
            $("#reportes").html("");
            var url = "webservice/servicios_reportes.php?GENERAL=";
            $.getJSON(url, function (result) {
                console.log(result);

                $.each(result, function (i, field) {
                    var id = field.idtraslado;
                    var fecha = field.fecha;
                    var contenedor = field.contenedor;
                    var almacen1 = field.almacen1;
                    var almacen2 = field.almacen2;
                    $("#reportes").append('<tr>' +
                            '<td>' + id + '</td>' +
                            '<td>' + contenedor + '</td>' +
                            '<td>' + almacen1 + '</td>' +
                            '<td>' + almacen2 + '</td>' +
                            '<td>' + fecha + '</td>');
                });
            });
            $('.table').show("fold", 1000);
        }
    });
});

