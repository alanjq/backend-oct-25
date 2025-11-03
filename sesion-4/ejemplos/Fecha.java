public class Fecha {
    // Atributos privados
    private int dia;
    private int mes;
    private int anyo;

    // Constructor de la clase
    public Fecha(){
        this.dia = 15;
        this.mes = 10;
        this.anyo = 2025;
    }

    public Fecha(int dia, int mes, int anio){
        this.dia = dia;
        this.mes = mes;
        this.anyo = anio;
    }

    // Devolver la fecha como una cadena de texto
    public String toString(){
        return this.dia + "/" + this.mes + "/" + this.anyo;
    }
}
