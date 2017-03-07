
<?php
include('header.php');
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="search container blue darken-4 z-depth-1">
        <form style="margin-top:20px;">
            <div style="padding:10px; border-radius: 10px;" class="row white">
                <h2 class="center">Administración de Usuarios</h2>
                <hr>
                <h4 class="center">Búsqueda de Usuarios</h4>
                <div class="col s4">
                    <label for="username">Nombre</label>
                    <input placeholder="Nombre de Usuario" id="search" type="search" required>
                </div>
                <div class="col s4">
                    <label for="username">Correo Electronica</label>
                    <input placeholder="Correo Electrónica" id="search" type="search" required>
                </div>
            </div>
            <button class="buscar btn waves-effect waves-light orange darken-3">Buscar
                <i class="material-icons right">search</i>
            </button>
            <a style="background-color:#0F6BFD;"class="waves-effect waves-light btn" href="#modal1"> <i class="material-icons right">person_add</i>Nuevo</a>
        </form>
    </div>
    <br>
    <br>
    <div class="container table">
        <table class="white">
            <thead>
                <tr>
                    <th data-field="id">Id</th>
                    <th data-field="name">Usuario</th>
                    <th data-field="free">Cargo</th>
                    <th data-field="max">Último Inicio de Sesión</th>
                    <th data-field="buttons"></th>
                    <th data-field="buttons"></th>

                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ender Bohórquez</td>
                    <td>Coordinador</td>
                    <td>10-10-2016</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Eliminar</a></td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Modificar</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Avilio Boscán</td>
                    <td>Empleado</td>
                    <td>25-12-2016</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Eliminar</a></td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Modificar</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Tito El Guapito</td>
                    <td>Coordinador</td>
                    <td>25-12-2015</td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Eliminar</a></td>
                    <td><a class="waves-effect waves-light btn orange darken-3">Modificar</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- Modal Trigger -->

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h3 class="center">Creación de Nuevo Usuario</h3>
            <p class="center">Introduzca en el formulario los datos del nuevo usuario.</p>
            <div class="row">
                <form style="margin-top: 10px;" class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Nombre" id="first_name" type="text" class="validate">
                            <label for="first_name">Nombre</label>
                        </div>
                        <div class="input-field col s6">
                            <input placeholder="Nombre de Usuario" id="last_name" type="text" class="validate">
                            <label for="last_name">Nombre de Usuario</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <select>
                                <option value="" disabled selected>Seleccione un tipo de Usuario</option>
                                <option value="1">Coordinador</option>
                                <option value="2">Empleado</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="Contraseña" id="password" type="password" class="validate">
                            <label for="password">Contraseña</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="Correo Electrónico" id="email" type="email" class="validate">
                            <label for="email">Correo Electrónico</label>
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
<?php
include("footer.php");
