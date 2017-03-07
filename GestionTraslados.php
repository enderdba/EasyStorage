<?php
include("header.php");
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <div class="search container blue darken-4 z-depth-1">
        <div style="padding:10px; border-radius: 10px;" class="white row">
            <h2 class="center">Gestión de Traslados</h2>
            <h5 class="center">Seleccione los almacenes para obtener un contenedor y trasladarlo</h5>
            <div class="left input-field col s5">
                <select id="almacen1">
                    <option value="" disabled selected>Seleccione un almacén</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Almacen 1</label>
            </div>

            <div class="right input-field col s5">
                <select id="almacen2">
                    <option value="" disabled selected>Seleccione un almacén</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Almacen 2</label>
            </div>
        </div>
    </div>
    <br>
    <div class="container white traslado row">
        <div class="left container a1 col s5">
            <h4 class="center">Almacen Seleccionado(min/max)</h4>
            <table class="white">
                <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="name">Nombre del Contenedor</th>
                        <th data-field="free">Tamaño</th>
                        <th data-field="button"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Contenedor 1</td>
                        <td>Mediano</td>
                        <td><a class="waves-effect waves-light btn orange darken-3">mover</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Contenedor 2</td>
                        <td>Grande</td>
                        <td><a class="waves-effect waves-light btn orange darken-3">mover</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Contenedor 3</td>
                        <td>Pequeño</td>
                        <td><a class="waves-effect waves-light btn orange darken-3">mover</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="right white container a2 table col s5">
            <h4 class="center">Almacen Seleccionado(min/max)</h4>
            <table class="white">
                <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="name">Nombre del Contenedor</th>
                        <th data-field="free">Tamaño</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Contenedor 1</td>
                        <td>Mediano</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Contenedor 2</td>
                        <td>Grande</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Contenedor 3</td>
                        <td>Pequeño</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
<?php
include("footer.php");
