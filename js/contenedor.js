$(document).ready(function () {
    var inputNombre, inputID, esPequeño, esMediano, esGrande;
    var nContenedor, nAlmacenAso, nTamaño, select;
    
    function actualizarValores() {
        inputNombre = $("#nombre").val();
        inputID = $("#id").val();
        esPequeño = $('#filled-in-box').prop('checked');
        esMediano = $('#filled-in-box').prop('checked');
        esGrande = $('#filled-in-box').prop('checked');
        nContenedor = $("#new_contenedor").val();
        nAlmacenAso = $("#almacen_asociado").val();
        select = document.getElementById("tamaño");
        nTamaño = select.options[select.selectedIndex].value;
        console.log(esPequeño);
        console.log(esMediano);
        console.log(esGrande);
    }
    var buscar = $("#buscar");
    var crear = $("#crear");
    
    buscar.click(function (){
        actualizarValores();
        $('.table').hide("fold", 1000);
        $("#contenedores").html("");
        
        //URL GENERAL
        var url = "webservice/Servicios.php?BGC=";
        
        //POR ID Y NOMBRE
        if(inputNombre && inputID){
            inputNombre = encodeURI(inputNombre);
            inputID = encodeURI(inputID);
            url = "webservice/Servicios.php?BECNI=&namec="+inputNombre+"&id="+inputID;
            console.log(url);
        }
        
        //POR NOMBRE
        else if (inputNombre) {
            inputNombre = encodeURI(inputNombre);
            url = "webservice/Servicios.php?BECN=&namec=" + inputNombre;
            console.log(url);
        }
        
        //POR ID
        else if(inputID){
            inputID = encodeURI(inputID);
            url = "webservice/Servicios.php?BECI=&id=" + inputID;
            console.log(url);
        }
        
        
        //AÑADO EL TAMAÑO AL URL EN CASO DE TENERLO
        //POR TAMAÑO: PEQUEÑO
        if(esPequeño === "true"){
            url += "&esp=true";
            console.log(url);
        }
        
        //POR TAMAÑO: MEDIANO
        else if(esMediano === "true"){
            url += "&esm=true";
            console.log(url);
        }
        
        //POR TAMAÑO: GRANDE
        else if(esGrande === "true"){
            url+= "&esg=true";
            console.log(url);
        }
        
        $.getJSON(url, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                var id = field.IDCONTENEDOR;
                var nombre = field.NOMBRE;
                var tamaño = field.TAMANO;
                var almacen = field.NOMBRE;
                $("#contenedores").append('<tr>' +
                        '<td>' + id + '</td>' +
                        '<td>' + nombre + '</td>' +
                        '<td>' + tamaño + '</td>' +
                        '<td>' + almacen + '</td>' +
                        '<td><a class="waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
        });
        
    });
    
        crear.click(function () {
        actualizarValores();
        newNombre = encodeURI(newNombre);
        newTamano = encodeURI(newTamano);
        var url = "webservice/Servicios.php";
        var dataString = "NEWCONTENEDOR=&nombrea=" + newNombre + "&tamano=" + newTamano;
        if (!$.trim(newNombre).length > 0 && !$.trim(newTamano).length > 0) {
            Materialize.toast("Debe escribir en todos los campos para crear un almacén", 3000);
            return;
        }
        console.log(url + "?" + dataString);
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            timeout: 10000,
            beforeSend: function () {
                Materialize.toast("Creando almacén", 2000);
            },
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Almacén creado correctamente!', 2000);
                    $('.modal').modal();
                } else {
                    Materialize.toast(data, 4000);
                    $('.modal').modal();
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
            }
        });


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
                        '<td><a data-target="' + id + '" class="storageshow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
        });
    });
    
   }
   );

