<?php
include("header.php");
?>

<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="search container blue darken-4 z-depth-1">
        <form style="margin-top:20px;">
            <div style="padding:10px; border-radius: 10px;" class="row white">
                <h2 class="center">Gestion de Respaldos</h2>
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
        <a style="background-color:#0F6BFD;"class="waves-effect waves-light btn" href="#modal1"> <i class="material-icons right">add_circle_outline</i>Generar Respaldo</a>
    </div>
    <br>
    <br>
    <div class="container table">
        <table class="white">
            <thead>
                <tr>
                    <th data-field="id">Id</th>
                    <th data-field="free">Creado El</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>28-01-2017</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Eliminar</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>20-01-2017</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Eliminar</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>02-01-2017</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Eliminar</a></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div id="modal1" class="modal">
        <div class="modal-content">
            <h3 class="center">Aviso de Creación de Respaldo</h3>
            <p class="center">¿Está seguro de generar un Respaldo? Este proceso tomará unos minutos en completarse.</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">No</a>
            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Sí</a>

        </div>
    </div>
</body>
<?php
include("footer.php");
