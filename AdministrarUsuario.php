
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
                    <label for="namesearch">Nombre</label>
                    <input placeholder="Nombre de Usuario" id="namesearch" type="search" required>
                </div>
                <div class="col s4">
                    <label for="codesearch">Código de Trabajador</label>
                    <input placeholder="Código de Trabajador" id="codesearch" type="search" required>
                </div>
            </div>
        </form>
        <button id="buscar" class=" btn waves-effect waves-light orange darken-3">Buscar
            <i class="material-icons right">search</i>
        </button>
        <a style="background-color:#0F6BFD;"class="waves-effect waves-light btn" href="#modal1"> <i class="material-icons right">person_add</i>Nuevo</a>
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
                    <th data-field="code">Código de Trabajador</th>
                    <th data-field="buttons"></th>

                </tr>
            </thead>

            <tbody id="usertable">
            </tbody>
        </table>
    </div>

    <div id="modal1" class="modal">
        <div class="modal-content">
            <h3 class="center">Creación de Nuevo Usuario</h3>
            <p class="center">Introduzca en el formulario los datos del nuevo usuario.</p>
            <div class="row">
                <form style="margin-top: 10px;" class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Nombre" id="newName" type="text" class="validate">
                            <label for="first_name">Nombre</label>
                        </div>
                        <div class="input-field col s6">
                            <input placeholder="Código de Trabajador" id="newCode" type="text" class="validate">
                            <label for="last_name">Código de Trabajador</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <select id="newType">
                                <option value="" disabled selected>Seleccione un tipo de Usuario</option>
                                <option value="1">Empleado</option>
                                <option value="2">Coordinador</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="Contraseña" id="newPassword" type="password" class="validate">
                            <label for="password">Contraseña</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Teléfono" id="newPhone" type="text" class="validate">
                            <label for="newEmail">Teléfono</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a class=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
            <a id="crear" class=" modal-action modal-close waves-effect waves-green btn-flat">Crear</a>

        </div>
    </div>

    <div id="modal2" class="modal">
        <div class="modal-content">
            <h3 class="center">Edición de Usuario</h3>
            <p class="center">Introduzca en el formulario los datos a modificar del usuario.</p>
            <div class="row">
                <form style="margin-top: 10px;" class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input disabled placeholder="ID Usuario" id="modId" type="text" class="validate">
                            <label for="first_name">ID de Usuario</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Nombre" id="modName" type="text" class="validate">
                            <label for="first_name">Nombre</label>
                        </div>
                        <div class="input-field col s6">
                            <input placeholder="Código de Trabajador" id="modCode" type="text" class="validate">
                            <label for="last_name">Código de Trabajador</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <select id="modType">
                                <option value="" disabled>Seleccione un tipo de Usuario</option>
                                <option id="option1" value="2">Coordinador</option>
                                <option id="option2" value="1">Empleado</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="Contraseña" id="modPassword" type="password" class="validate">
                            <label for="password">Contraseña</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input placeholder="Teléfono" id="modPhone" type="text" class="validate">
                            <label for="newEmail">Teléfono</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal-footer">
            <a class=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
            <a id="editar" class=" modal-action modal-close waves-effect waves-green btn-flat">Editar</a>
            <a id="eliminar" class=" modal-action modal-close waves-effect waves-green btn-flat">Eliminar</a>
        </div>
    </div>


</body>
<script type="text/javascript" src="js/usuarios.js"></script>
<?php
include("footer.php");
