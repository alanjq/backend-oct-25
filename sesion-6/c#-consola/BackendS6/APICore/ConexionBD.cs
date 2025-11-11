using Google.Protobuf;
using MySql.Data.MySqlClient;
using MySqlX.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;

namespace Ejemplo1
{


    internal class ConexionBD
    {
        public ConexionBD()
        {
            Console.WriteLine("Se va a realizar la conexión a la Base de Datos.");
            Conectar();
        }

        private Dictionary<string, object>? Conectar()
        {
            String DB_Host = "localhost";
            String DB_Port = "3306";
            String DB_User = "root";
            String DB_Pass = "root";
            String DB_Name = "world";


            String connString = String.Format("server={0};port={1};user id={2}; password={3}; database={4}",
                DB_Host, DB_Port, DB_User, DB_Pass, DB_Name);

            MySqlConnection cnx = new MySqlConnection(connString);

            // Consultar
            String query = "SELECT Code, Name FROM world.country;";
            // Creamos el comando a ejecutar
            MySqlCommand command =  new MySqlCommand(query, cnx);

            // Crear JSON manualmente
            String jsonresponse = "";
            
            try {
                cnx.Open();
                Console.WriteLine("Conexión correcta.");

                //command.ExecuteReader();
                // Ejecutamos la consulta y revisamos la respuesta
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        String clave = reader.GetString(0);
                        String pais = reader.GetString(1);
                        jsonresponse += String.Format("{ \"clave\":{0}, \"pais\"={1} },", clave, pais);

                        Console.WriteLine($"Código: {reader[0]}, País: {reader[1]}");
                    }
                }

                jsonresponse = "{[" + jsonresponse + "]}";

                cnx.Close();

                return JsonSerializer.Deserialize<Dictionary<string, object>>(jsonresponse);
            }
            catch(MySqlException ex) {
                Console.WriteLine(ex.Message + connString);

                jsonresponse = "{ \"error\": "+ ex.Message + ", \"conexion\": "+ connString + " }";

                return JsonSerializer.Deserialize<Dictionary<string, object>>(jsonresponse);
            }

        }


    }
}
