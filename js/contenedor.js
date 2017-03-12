$(document).ready(function () {
    var inputLote, inputID, esPequeño, esMediano, esGrande;
    var nContenedor, nAlmacenAso, nTamaño, select, valTamaño;
    var nAlm;
    
    function actualizarValores() {
        inputLote = $("#lote").val();
        inputID = $("#idcont").val();
        esPequeño = $('#check1').prop('checked');
        esMediano = $('#check2').prop('checked');
        esGrande = $('#check3').prop('checked');
        nContenedor = $("#new_contenedor").val();
        nAlmacenAso = $("#almacen_asociado").val();
        select = document.getElementById("tamaño");
        nTamaño = select.options[select.selectedIndex].value;
        validarTamaño(nTamaño);
        console.log(esPequeño);
        console.log(esMediano);
        console.log(esGrande);
    }
    
    //DEPENDIENDO DEL ID DE TAMAÑO, DEVOLVER RESULTADO
    function validarTamaño(tamaño){
        if(tamaño === "1"){
            valTamaño = "Pequeño";
        }else if(tamaño === "2"){
            valTamaño = "Mediano";
        }else if(tamaño === "3"){
            valTamaño = "Grande";
        }else{
            valTamaño = "Esto no deberia aparecer";
        }
    }
    
    var buscar = $("#buscar");
    var crear = $("#crear");

    buscar.click(function () {
        actualizarValores();
        $('.table').hide("fold", 1000);
        $("#contenedores").html("");

        //URL GENERAL
        var url = "webservice/Servicios.php?BGC=";
        
        //POR ID Y LOTE
        if(inputLote && inputID){
            inputLote = encodeURI(inputLote);
            inputID = encodeURI(inputID);
            url = "webservice/Servicios.php?BECNI=&lote="+inputLote+"&idcont="+inputID;
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
        if(esPequeño){
            url += "&esp=true";
            console.log(url);
        }

        //POR TAMAÑO: MEDIANO
        else if(esMediano){
            url += "&esm=true";
            console.log(url);
        }

        //POR TAMAÑO: GRANDE
        else if(esGrande){
            url+= "&esg=true";
            console.log(url);
        }
        console.log("url final = " + url);
        
        $.getJSON(url, function (result) {
            console.log(result);
            
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
                        '<td><a class="waves-effect waves-light btn orange darken-3">ver</a></td></tr>');

            }
            );
            $('.table').show("fold", 1000);
        });

    });
    
    //NO ESTA LISTO u.u
    crear.click(function () {

        var almacenOK;
        
        actualizarValores();
        nContenedor = encodeURI(nContenedor);
        nAlmacenAso = encodeURI(nAlmacenAso);

        //Validar que el nombre del almacen asociado exista y tenga unidades libres
        $.ajax({
            type: "POST",
            url: "webservice/Servicios.php",
            data: "NAV=&n="+nAlmacenAso,
            crossDomain: true,
            cache: false,
            timeout: 10000,
            success: function (data) {
                if (data === "ok") {
                    almacenOK = true;
                } 
//                else if(data === "sin espacio"){
//                    Materialize.toast("El almacen "+nAlmacenAso+" no contiene espacio libre.", 4000);
//                    nombreOk = false;
//                }
                else {
                    Materialize.toast("El almacen al cual desea asociar no existe o no contiene espacio libre.", 4000);
//                    $('.modal').modal();
                    almacenOK = false;
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
                almacenOK = false;
            }
        });
        
        if(!almacenOK){
            return;
        }

        var url = "webservice/Servicios.php";
        var dataString = "NEWCONTENEDOR=&nombrec=" + nContenedor + "&tamano=" + valTamaño + "&alm_aso=" + nAlmacenAso;
        if (!$.trim(nContenedor).length > 0 && !$.trim(valTamaño).length > 0) {
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
