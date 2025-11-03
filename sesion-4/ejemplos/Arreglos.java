public class Arreglos {
    String[] lista_nombres = { "Rosa", "Armando", "Lorena" };

    String[][] lista_nombres2 = {
            // 0
            {
                    "Nombre", // 0
                    "Apellido", // 1
                    "Edad" // 2
            },
            // 1
            {
                    "Armando", // 0
                    "Salazar", // 1
                    "20" // 2
            },
            // 2
            {
                    "Lorena", // 0
                    "Rebollar", // 1
                    "20" // 2
            }
    };

    // Constructor de la clase
    public Arreglos() {
        int[] numeros = { 1, 20, 30, 4, 5 };
        boolean[] decisiones;
        char[] vocales = { 'a', 'e', 'i', 'o', 'u' };

        System.out.println("El primero de la lista de nombres es: " + lista_nombres[0]);
    }

    public void ListarTodo() {
        for (int i = 0; i < lista_nombres.length; i++) {
            System.out.println("Elemento " + i + " del arreglo: " + lista_nombres[i]);
        }
    }

    public void ListarTodoMulti() {
        for (int i = 0; i < lista_nombres2.length; i++) {
            String[] fila = lista_nombres2[i];

            for (int j = 0; j < fila.length; j++) {
                System.out.println("Dato[" + i + "][" + j + "]: " + fila[j]);
            }
        }
    }
}
