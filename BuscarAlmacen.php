<?php
include("header.php");
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="search container blue darken-4 z-depth-1">
        <form style="margin-top:20px;">
            <div style="padding:10px; border-radius: 10px;" class="row white">
                <h2 class="center">Búsqueda de Almacenes</h2>
                <hr>
                <div class="col s3">
                    <label for="username">Nombre</label>
                    <input id="nombre" placeholder="Nombre del Almacen" id="search" type="search">
                </div>
                <div class="col s3">
                    <label for="username">ID</label>
                    <input id="id" placeholder="ID del Almacen" id="search" type="search">
                </div>
                <div class="col s3">
                    <p>
                        <input type="checkbox" class="filled-in" id="filled-in-box" />
                        <label for="filled-in-box">Tiene Unidades Libres?</label>
                    </p>
                    <br>
                </div>
            </div>
        </form>
        <button id="buscar" class="btn waves-effect waves-light orange darken-3">Buscar
            <i class="material-icons right">search</i>
        </button>
        <a style="background-color:#0F6BFD;" class="waves-effect waves-light btn" href="#modal1"> <i class="material-icons right">add_circle_outline</i>Nuevo</a>
    </div>
    <br>
    <br>
    <div class="container table">
        <table class="white">
            <thead>
                <tr>
                    <th data-field="id">Id</th>
                    <th data-field="name">Nombre del Almacen</th>
                    <th data-field="free">Unidades Libres</th>
                    <th data-field="max">Unidades Máximas</th>
                    <th data-field="buttons"></th>
                </tr>
            </thead>

            <tbody id="almacenes">

            </tbody>
        </table>
    </div>

    <!-- Modal Trigger -->

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h3 class="center">Creación de Almacén</h3>
            <p class="center">Introduzca en el formulario los datos del nuevo almacén</p>
            <div class="row">
                <form style="margin-top: 10px;" class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="nombre_almacen" placeholder="Nombre" id="first_name" type="text" class="validate">
                            <label for="almacen_name">Nombre</label>
                        </div>
                        <div class="input-field col s12">
                            <label for="spinner">Peso Máximo:</label>
                            <input onkeyup="this.value = this.value.replace(/[^0-9]/g, '');" id="input-max" min="0" max="100" type="number" step="1"  pattern="\d*" name="value">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
            <a id="crear" href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Crear</a>
        </div>
    </div>

    <div id="modal2" class="modal">
        <div class="modal-content">
            <h3 class="center">Edición de Almacén</h3>
            <p class="center">Modifique los datos del almacén</p>
            <div class="row">
                <form style="margin-top: 10px;" class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="id_mod" placeholder="ID" type="text" disabled>
                            <label for="almacen_name">ID</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="nombre_almacen_mod" placeholder="Nombre" type="text" class="validate">
                            <label for="almacen_name">Nombre</label>
                        </div>
                        <div class="input-field col s12">
                            <label for="spinner">Peso Máximo:</label>
                            <br>
                            <p>Nota: La modificación de peso del Almacén dependerá del espacio libre que éste posea.</p>
                            <input id="input-max_mod" min="0" max="100" type="number" step ="1" name="value">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
            <a id="editar"  class=" modal-action modal-close waves-effect waves-green btn-flat">Editar</a>
            <a id="eliminar" class=" modal-action modal-close waves-effect waves-green btn-flat">Eliminar</a>
        </div>
    </div>
</body>
<script type="text/javascript" src="js/almacen.js"></script>
<?php
include("footer.php");
