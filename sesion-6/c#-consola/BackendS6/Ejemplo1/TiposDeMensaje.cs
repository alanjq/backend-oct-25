namespace Ejemplo1
{
    class TiposDeMensaje
    {
        //String dia = "Miércoles";
        //DateTime hoy = new DateTime(2000, 05, 20);

        public TiposDeMensaje(int anio, int mes, int dia) {
            DateTime hoymismo = new DateTime(anio, mes, dia);
            Console.WriteLine("La fecha de hoy es " + hoymismo.ToLongDateString());
            Console.ReadLine();
            return;
        }
    }
}
