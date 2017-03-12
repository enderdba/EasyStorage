$(document).ready(function () {
    var inputNombre, inputID, esPequeño, esMediano, esGrande;

    function actualizarValores() {
        inputNombre = $("#nombre").val();
        inputID = $("#id").val();
        esPequeño = $('#filled-in-box').prop('checked');
        esMediano = $('#filled-in-box').prop('checked');
        esGrande = $('#filled-in-box').prop('checked');
        console.log("Es pequeño? " + esPequeño);
        console.log("Es mediano? " + esMediano);
        console.log("Es grande? " + esGrande);
    }
    var buscar = $("#buscar");
    var crear = $("#crear");

    buscar.click(function () {
        actualizarValores();
        $('.table').hide("fold", 1000);
        $("#contenedores").html("");

        //URL GENERAL
        var url = "webservice/servicios_contenedor.php?BGA=";

        //POR ID Y NOMBRE
        if (inputNombre && inputID) {
            inputNombre = encodeURI(inputNombre);
            inputID = encodeURI(inputID);
            url = "webservice/servicios_contenedor.php?BECNI=&namec=" + inputNombre + "&id=" + inputID;
            console.log(url);
        }

        //POR NOMBRE
        else if (inputNombre) {
            inputNombre = encodeURI(inputNombre);
            url = "webservice/servicios_contenedor.php?BECN=&namec=" + inputNombre;
            console.log(url);
        }

        //POR ID
        else if (inputID) {
            inputID = encodeURI(inputID);
            url = "webservice/servicios_contenedor.php?BECI=&id=" + inputID;
            console.log(url);
        }


        //AÑADO EL TAMAÑO AL URL EN CASO DE TENERLO
        //POR TAMAÑO: PEQUEÑO
        if (esPequeño === "true") {
            url += "&esp=true";
            console.log(url);
        }

        //POR TAMAÑO: MEDIANO
        else if (esMediano === "true") {
            url += "&esm=true";
            console.log(url);
        }

        //POR TAMAÑO: GRANDE
        else if (esGrande === "true") {
            url += "&esg=true";
            console.log(url);
        }

        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.ID;
                var nombre = field.NOMBRE;
                var tamaño = field.TAMAÑO;
                $("#contenedores").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + nombre + '</td>' +
                        '<td>' + tamaño + '</td>' +
                        '<td><a class="waves-effect waves-light btn orange darken-3">ver</a></td></tr>');

            }
            );
            $('.table').show("fold", 1000);
        });

    });

}
);

