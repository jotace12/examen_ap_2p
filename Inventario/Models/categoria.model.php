<?php
require_once('../Config/cls_conexion.model.php');
class Clase_categoria
{
    public function todos()
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `categorias`";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function uno($id_categorias)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `categorias` WHERE id_categorias=$id_categorias";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function insertar($nombre, $descripcion)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `categorias`( `nombre`, `descripcion`) VALUES ('$nombre','$descripcion')";

            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function actualizar($id_categorias, $nombre, $descripcion)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `categorias` SET `nombre`='$nombre',`descripcion`='$descripcion' WHERE `id_categorias`=$id_categorias";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function eliminar($id_categorias)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "delete from categorias where id_categorias=$id_categorias";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
/*

"SELECT * FROM `Proveedor` WHERE ProveedorId=4<br />
<b>Fatal error</b>:  Uncaught TypeError: mysqli_fetch_assoc(): Argument #1 ($result) must be of type mysqli_result, string given in /Applications/MAMP/htdocs/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php:27
Stack trace:
#0 /Applications/MAMP/htdocs/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php(27): mysqli_fetch_assoc('Table 'inventar...')
#1 {main}
  thrown in <b>/Applications/MAMP/htdocs/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php</b> on line <b>27</b><br />
"
*/