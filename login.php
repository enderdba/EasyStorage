<?php
include("header.php");
?>
<body style="background-image:url(login.jpg) !important; background-size:cover">
    <form action="index.php">
        <div class="login container form-options center input-form blue darken-4">
            <h3 class="center white-text">Inicio de Sesión</h3>
            <div class="form-cont white">
                <br>
                <div>
                    <label for="username">Usuarissso</label>
                    <input placeholder="Usuario" id="username" type="text" class="validate">

                </div>
                <div>
                    <label for="password">Contraseña</label>
                    <input placeholder="Contraseña" id="password" type="password" class="validate">
                </div>
            </div>
            <br>
            <a id="insert" class="btn waves-effect waves-light orange darken-3">Entrar
                <i class="material-icons right">send</i>
            </a>
        </div>
    </form>
    </body>
    <?php
    include("footer.php");
    
