public class Main {

    public static void main(String[] args){
        int dia = 29;
        String nombre = "JAVA";
        String apellido;

        System.out.println("Hola "+ nombre + ". Hoy es " + dia + " de octubre.");

        Fecha objeto_fecha = new Fecha();
        System.out.println("Fecha predeterminada: " + objeto_fecha.toString());

        Fecha fecha_nueva = new Fecha(29, 10, 2025);
        System.out.println("Fecha correcta: " + fecha_nueva.toString());
        
        System.out.println("----------------");
        Arreglos listas = new Arreglos();
        listas.ListarTodo();
        System.out.println("----------------");
        listas.ListarTodoMulti();
    }
}
