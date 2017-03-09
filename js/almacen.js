$(document).ready(function () {
    //variables globales
    var inputNombre, inputId, inputUnidadesLibres;

    function actualizarValores() {
        inputNombre = $("#nombre").val();
        inputId = $("#id").val();
        inputUnidadesLibres = $('#filled-in-box').prop('checked');
        console.log(inputUnidadesLibres);
    }

    //CAMPOS
    //busqueda
    $("#nombre").val();
    $("#id").val();

    //creacion
    $("#nombre").val();
    $("#monto").val();

    //botones
    var buscar = $("#buscar");
    var crear = $("#crear");

    //EVENT LISTENERS
    crear.click(function () {

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
        } else if (inputId) {
            inputId = encodeURI(inputId);
            url = "webservice/Servicios.php?BEI=&idalma=" + inputId;
            console.log(url);
        } else if (inputNombre && inputId) {
            inputNombre = encodeURI(inputNombre);
            inputId = encodeURI(inputId);
            url = "webservice/Servicios.php?BEAIDN=&namea=&idalma=" + inputNombre;
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
