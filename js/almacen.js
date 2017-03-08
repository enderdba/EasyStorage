$(document).ready(function () {
    //variables globales
    var inputNombre, inputId, inputUnidadesLibres;

    function actualizarValores() {
        inputNombre = $("#nombre").val();
        inputId = $("#id").val();
    }

    //CAMPOS
    $("#nombre").val();
    $("#id").val();
    var buscar = $("#buscar");
    //EVENT LISTENERS
    buscar.click(function () {
        actualizarValores();
        $('.table').hide("fold", 1000);
        $("#almacenes").html("");

        //DECISIONES PARA BUSQUEDAS CON CRITERIOS
        //urlbase general
        var url = "webservice/Servicios.php?BGA=";
        if (inputNombre){
            inputNombre = encodeURI(inputNombre);
            url = "webservice/Servicios.php?BEA=&namea="+inputNombre;
            console.log(url);
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
