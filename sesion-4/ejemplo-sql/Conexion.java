import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    private String url = "jdbc:mysql://localhost:3306/sesion3";
    private String usuario = "root";
    private String contrasena = "root";

    public Conexion(){
        Conectar();
    }

    public void Conectar(){
        try(Connection conexion = DriverManager.getConnection(this.url, this.usuario, this.contrasena)){
            System.out.println("Conexión exitosa.");
        }
        catch (SQLException e) {
            System.out.println("Error en la conexión. " + e.getMessage());
        }
    }
}
