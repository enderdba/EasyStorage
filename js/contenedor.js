$(document).ready(function () {
    var inputLote, inputID, esPequeño, esMediano, esGrande;
    var nLote, nAlmacenAso, nTamaño, selectTam, valTamaño, valTamaño2, color, peso, almacenOK;
    var uniLibres;
    var lote_m,tam_m,alm_m;
    
    function actualizarValores() {
        inputLote = $("#lote").val();
        inputID = $("#idcont").val();
        esPequeño = $('#check1').prop('checked');
        esMediano = $('#check2').prop('checked');
        esGrande = $('#check3').prop('checked');
        
        peso = $("#peso_contenedor").val();
        nLote = $("#n_lote").val();
        nAlmacenAso = $("#almacen_asociado").val();
        selectTam = document.getElementById("tamaño");
        nTamaño = selectTam.options[selectTam.selectedIndex].value;
        selectColor = document.getElementById("color");
        color = selectColor.options[selectColor.selectedIndex].value;
        validarTamaño(nTamaño);
        lote_m = $("#id_mod").val();
        alm_m = $("#alm_m").val();
        tam_m = $("#tam_m").val();
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
    
    function validarTamañoReverse(tam){
        if(tam === "Pequeño"){
            valTamaño2 = "1";
        }else if (tam === "Mediano"){
            valTamaño2 = "2";
        }else if (tam === "Grande"){
            valTamaño2 = "3";
        }else{
            valTamaño2 = "Esto no deberia aparecer";
        }
    }
    
    //DEVOLVER COLOR DEPENDIENDO DE LA SELECCION
    function validarColor(color){
        if(color === "1"){
            return "Verde";
        }else if(color === "2"){
            return "Azul";
        }else if(color === "3"){
            return "Gris";
        }else if(color === "4"){
            return "Marrón";
        }else if(color === "5"){
            return "Rojo";
        }else{
            console.log("rip color");
            return "";
        }
    }
    
    function actualizarResultados(){
        actualizarValores();
        $('.table').hide("fold", 1000);
        $("#contenedores").html("");
        
        //URL GENERAL
        var url = "webservice/servicios_contenedor.php?BGC=";
        
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
                        '<td><a data-target="' + id + '" class="storageshow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
            addEvents();
        });
    }
    
    function addEvents() {
        
        $(".storageshow").click(function () {
            console.log("aaaaa = " + $(this).data("target"));
            $("#modal2").modal('open');
            actualizarValores();
            var selectedId = $(this).data("target");
            selectedId = encodeURI(selectedId);
            url = "webservice/servicios_contenedor.php?BECI2=&idcont=" + selectedId;
            console.log(url);
            
            $.getJSON(url, function (result) {
                console.log(result);
                $.each(result, function (i, field) {
                    
                    var lote = field.LOTE;
                    var alm_aso = field.NOMBRE;
                    validarTamaño(field.UNIDADES);
                    var peso = field.PESO;
                    var color = field.COLOR;
                    $("#id_mod").val(lote);
                    $("#alm_m").val(alm_aso);
                    $("#tam_m").val(valTamaño);
                    $("#peso_m").val(peso);
                    $("#color_m").val(color);
                });
            });
        });
    }
    
    var buscar = $("#buscar");
    var crear = $("#crear");
    var nuevo = $("#nuevo");
    var eliminar = $("#eliminar");
    
    //VALIDAR QUE EL PESO DEL CONTENEDOR A CREAR NO SEA MAYOR A 1000 KG
    $("#peso_contenedor").keyup(function (){
        if($("#peso_contenedor").val() > 1000){
            $("#peso_contenedor").val(1000);
        }
    });
    
    
    eliminar.click(function (){
        actualizarValores();
        var uni;
        var url2 = "webservice/servicios_contenedor.php";
        var dataString2 = "CONSULTAUNI&alm_m=" + alm_m;
        console.log("servicio 1 Eliminar: "+dataString2);
        var consultaOk = true;
        $.ajax({
            type: "POST",
            url: url2,
            data: dataString2,
            crossDomain: true,
            cache: false,
            async: false,
            timeout: 10000,
            success: function (data) {
                console.log("primera dataa: "+data);
                if (data !== "Error al intentar consultar la tabla Almacenes") {
                    
                    data = data.replace('[{"UNILIBRES":"',"");
                    uni = data.replace('"}]',"");
                    console.log("primera data: "+uni);
                    
                } else {
                    Materialize.toast("Error al intentar consultar la tabla Almacenes", 4000);
                    consultaOk = false;
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
                consultaOk = false;
            }
        });
        
        if(!consultaOk){
            return;
        }
        validarTamañoReverse(tam_m);
        var url3 = "webservice/servicios_contenedor.php";
        var dataString3 = "UPDATEALM2&alma=" + alm_m + "&tam=" + valTamaño2 + "&uni="+uni;
        console.log("update: "+dataString3);
        $.ajax({
            type: "POST",
            url: url3,
            data: dataString3,
            crossDomain: true,
            cache: false,
            async: false,
            timeout: 10000,
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Se actualizaron las unidades del almacen asociado!', 2000);
                } else {
                    Materialize.toast(data, 10000);
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
            }
        });
        
        var url = "webservice/servicios_contenedor.php";
        var dataString = "BORRARCONTENEDOR&lote_m=" + lote_m;
        console.log(url + "?" + dataString);
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            async: false,
            timeout: 10000,
            beforeSend: function () {
                Materialize.toast("Eliminando Contenedor..", 2000);
            },
            success: function (data) {
                console.log("data = "+data);
                if (data === "ok") {
                    Materialize.toast('Contenedor eliminado correctamente!', 2000);
                } else {
                    Materialize.toast(data, 4000);
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
            }
        });
        window.setTimeout(actualizarResultados(), 1000);
    });
    
    nuevo.click(function () {
        console.log("limpio");
        $("#peso_contenedor").val("");
        $("#n_lote").val("");
        $("#almacen_asociado").val("");
        $("#almacen_asociado").val("");
        $("#tamaño").select().val("");
    });
    
    buscar.click(function (){
        actualizarValores();
        $('.table').hide("fold", 1000);
        $("#contenedores").html("");
        
        //URL GENERAL
        var url = "webservice/servicios_contenedor.php?BGC=";
        
        //POR ID Y LOTE
        if(inputLote && inputID){
            inputLote = encodeURI(inputLote);
            inputID = encodeURI(inputID);
            url = "webservice/servicios_contenedor.php?BECNI=&lote="+inputLote+"&idcont="+inputID;
            console.log(url);
        }
        
        //POR LOTE
        else if (inputLote) {
            inputLote = encodeURI(inputLote);
            url = "webservice/servicios_contenedor.php?BECN=&lote=" + inputLote;
            console.log(url);
        }
        
        //POR ID
        else if(inputID){
            inputID = encodeURI(inputID);
            url = "webservice/servicios_contenedor.php?BECI=&idcont=" + inputID;
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
                        '<td><a data-target="' + id + '" class="storageshow waves-effect waves-light btn orange darken-3">ver</a></td></tr>');
            });
            $('.table').show("fold", 1000);
            $('#check1').prop('checked', false);
            $('#check2').prop('checked', false);
            $('#check3').prop('checked', false);
            addEvents();
        });
        
    });
    
    crear.click(function () {

        var valColor;
        
        actualizarValores();
        console.log("tamaño del contenedor = "+nTamaño);
        nAlmacenAso = encodeURI(nAlmacenAso);
        nLote = encodeURI(nLote);
        valColor = validarColor(color);
        console.log("length del color: "+valColor.length);
        console.log("Color: "+valColor);
        if (!$.trim(nLote).length > 0 
                || !$.trim(valTamaño).length > 0 
                || !$.trim(peso.toString()).length > 0 
                || !$.trim(nAlmacenAso).length > 0
                || !$.trim(valColor).length > 0) {
            Materialize.toast("Debe escribir en todos los campos para crear un Contenedor", 4000);
            return;
        }

        //Validar que el nombre del almacen asociado exista y tenga unidades libres
        $.ajax({
            type: "POST",
            url: "webservice/servicios_contenedor.php",
            data: "NAV=&n="+nAlmacenAso+"&tam=" + nTamaño,
            crossDomain: true,
            async: false,
            cache: false,
            timeout: 10000,
            success: function (data) {
                almacenOK = true;
                
                if (data !== "Error al intentar consultar la tabla Almacenes") {
                    data = data.replace('[{"UNILIBRES":"',"");
                    uniLibres = data.replace('"}]',"");
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
            console.log("retorno");
            return;
        }


        var url = "webservice/servicios_contenedor.php";
        var dataString = "NEWCONTENEDOR=&lote=" + nLote + "&alm_aso=" + nAlmacenAso + "&peso=" + peso + "&color="+ valColor + "&idtam="+nTamaño;
        
        console.log(url + "?" + dataString);
        $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            async: false,
            timeout: 10000,
            beforeSend: function () {
                Materialize.toast("Registrando Contenedor", 2000);
            },
            success: function (data) {
                
                if (data === "ok") {
                    Materialize.toast('Contenedor creado correctamente!', 2000);
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
        
        console.log("final unilibres = "+uniLibres)
        var url2 = "webservice/servicios_contenedor.php";
        var dataString2 = "UPDATEALM=&alma=" + nAlmacenAso + "&tam=" + nTamaño + "&uni="+uniLibres;
        console.log("dataString2 : "+dataString2);
        $.ajax({
            type: "POST",
            url: url2,
            data: dataString2,
            crossDomain: true,
            cache: false,
            timeout: 10000,
            
            success: function (data) {
                if (data === "ok") {
                    Materialize.toast('Se actualizaron las unidades del almacen asociado!', 2000);
                } else {
                    Materialize.toast(data, 10000);
                }
            },
            error: function () {
                Materialize.toast("Se agotó el tiempo de espera del servidor.");
            }
            
            
        });
        window.setTimeout(actualizarResultados(), 1000);
    });
    
   }
   );