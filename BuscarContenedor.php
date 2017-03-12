<?php
include("header.php");
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="search container blue darken-4 z-depth-1">
        <div style="padding:10px; border-radius: 10px;" class="row white">
            <h2 class="center">Búsqueda de Contenedores</h2>
            <hr>
        </div>
        <div style="padding:10px; border-radius: 10px;" class="row white">
            <form style="margin-top:20px;">
                <div class="left col s3">
                    <label for="username">Lote</label>
                    <input placeholder="Lote del Contenedor" id="lote" type="search" required>
                </div>
                <div class="center col s3">
                    <label for="username">ID</label>
                    <input placeholder="ID del Contenedor" id="idcont" type="search" required>
                </div>
                <div class="col s2">
                    <p>
                        <input name="group1" type="radio" id="check3" />
                        <label for="check3">Grande</label>
                    </p>
                </div>
                <div class="col s2">
                    <p>
                        <input name="group1" type="radio" id="check2" />
                        <label for="check2">Mediano</label>
                    </p>
                </div>
                <div class="col s2">
                    <p>
                        <input name="group1" type="radio" id="check1" />
                        <label for="check1">Pequeño</label>
                    </p>
                </div>
                <br>
            </form>
        </div>
        <button id="buscar" class="buscar btn waves-effect waves-light orange darken-3">Buscar
            <i class="material-icons right">search</i>
        </button>
        <a style="background-color:#0F6BFD;"class="waves-effect waves-light btn" href="#modal1"> <i class="material-icons right">add_circle_outline</i>Nuevo</a>
    </div>
    <br>
    <br>
    <div class="container table">
        <table class="white">
            <thead>
                <tr>
                    <th data-field="id">Id</th>
                    <th data-field="name">Lote del Contenedor</th>
                    <th data-field="free">Tamaño</th>
                    <th data-field="max">Almacenado En</th>
                    <th data-field="buttons"></th>
                </tr>
            </thead>

            <tbody id="contenedores">
<!--                <tr>
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
                </tr>-->
            </tbody>
        </table>
    </div>

    <!-- Modal Trigger -->
    <!-- Modal Structure -->
    <div style= "padding-bottom:30px;" id="modal1" class="modal">
        <div  class="modal-content">
            <h3 class="center">Creación de Contenedor</h3>
            <p class="center">Introduzca en el formulario los datos del nuevo contenedor</p>
            <div class="row">
                <form style="margin-top: 10px;" class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="Nombre" id="new_contenedor" type="text" class="validate">
                            <label for="almacen_name">Nombre</label>
                        </div>
                        <div class="input-field col s12">
                            <select id="tamaño">
                                <option value="" disabled selected>Seleccione un tipo de Contenedor</option>
                                <option value="1">Pequeño</option>
                                <option value="2">Mediano</option>
                                <option value="3">Grande</option>
                            </select>
                        </div>
                        <div class="input-field col s12">
                            <input placeholder="Almacen en donde se ubicara" id="almacen_asociado" type="text" class="validate">
                            <label for="almacen_aso">Almacen Asociado</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Crear</a>
        </div>
    </div>
</body>
<script type="text/javascript" src="js/contenedor.js"></script>
<?php
include("footer.php");
