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
                    <input id="input-ini" placeholder="Seleccione la Fecha Inicial" type="date" class="datepicker">
                </div>
                <div class="right col s5">
                    <input id="input-fin" placeholder="Seleccione la Fecha Final"type="date" class="datepicker">
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
                    <th data-field="name">Nombre del Contenedor</th>
                    <th data-field="free">Tamaño</th>
                    <th data-field="max">Almacenado En</th>
                    <th data-field="buttons"></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Contenedor 1</td>
                    <td>Grande</td>
                    <td>Almacen 1</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">ver</a></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Contenedor 2</td>
                    <td>Pequeño</td>
                    <td>Almacen 1</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">ver</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Contenedor 3</td>
                    <td>Mediano</td>
                    <td>Almacen 3</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">ver</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
<?php
include("footer.php");
