package mx.tecmilenio.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackenddemoApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(BackenddemoApplication.class, args);
	}

	// Rutas de API
	// @endpoint localhost:8080/backend/
	public void index(){

	}

	// @endpoint localhost:8080/backend/apellido/{nombre}
	public void getEmpleadoByApellido(String nombre){

	}

	public void postEmpleado(int id){

	}
	
	public void updateEmpleado(int id){

	}

	public void deleteEmpleado(int id){

	}

}
