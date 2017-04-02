<?php
include("header.php");
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="search container blue darken-4 z-depth-1">
        <form style="margin-top:20px;">
            <div style="padding:10px; border-radius: 10px;" class="row white">
                <h2 class="center">Gestión de Reportes</h2>
                <h5 class="center">Seleccione una fecha "desde" y "hasta".</h5>
                <hr>
                <div class="left col s5">
                    <input id="input-ini" placeholder="Seleccione la Fecha Inicial" type="text" class="datepicker">
                </div>
                <div class="right col s5">
                    <input id="input-fin" placeholder="Seleccione la Fecha Final" type="text" class="datepicker">
                </div>
            </div>
        </form>
        <button  class="buscar-reporte btn waves-effect waves-light orange darken-3">Buscar
            <i class="material-icons right">search</i>
        </button>
    </div>
    <br>
    <br>
    <div class="container table">
        <table class="white">
            <thead>
                <tr>
                    <th data-field="id">Id</th>
                    <th data-field="cont">Contenedor (Lote)</th>
                    <th data-field="almO">Almacen Origen</th>
                    <th data-field="almD">Almacen Destino</th>
                    <th data-field="fecha">Fecha</th>
                </tr>
            </thead>

            <tbody id ="reportes">
            </tbody>
        </table>
    </div>
</body>
<script type="text/javascript" src="js/reportes.js"></script>
<?php
include("footer.php");
