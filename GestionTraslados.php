<?php
include("header.php");
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="search container blue darken-4 z-depth-1">
        <div style="padding:10px; border-radius: 10px;" class="white row">
            <h2 class="center">Gestión de Traslados</h2>
            <h5 class="center">Seleccione los almacenes para obtener un contenedor y trasladarlo</h5>
            <div class="left input-field col s5">
                <select class="browser-default" id="almacen1">
                </select>
            </div>

            <div class="right input-field col s5">
                <select class="browser-default" id="almacen2">
                </select>
            </div>
        </div>
        <a id="limpiar" style="background-color:#0F6BFD;"class="waves-effect waves-light btn"> <i class="material-icons right">clear_all</i>Limpiar</a>
    </div>
    <br>
    <div class="container white traslado row">
        <div class="left container a1 col s5">
            <h4 class="center"><span id="a1-name">Almacen Seleccionado</span> (<span id="a1-libre">min</span>/<span id="a1-max">max</span>)</h4>
            <table class="white">
                <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="name">Nombre del Contenedor</th>
                        <th data-field="free">Tamaño</th>
                        <th data-field="button"></th>
                    </tr>
                </thead>
                <tbody id="contenedores1">
                </tbody>
            </table>
        </div>
        <div id="alma2" class="right white container a2 table col s5">
            <h4 class="center"><span id="a2-name">Almacen Seleccionado</span>(<span id="a2-libre">min</span>/<span id="a2-max">max</span>)</h4>
            <table class="white">
                <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="name">Nombre del Contenedor</th>
                        <th data-field="free">Tamaño</th>
                    </tr>
                </thead>

                <tbody id="contenedores2">
                </tbody>
            </table>
        </div>
    </div>
</body>
<script type="text/javascript" src="js/traslado.js"></script>
<?php
include("footer.php");
