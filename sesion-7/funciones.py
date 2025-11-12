# Definición de funciones
def mostrarMensaje(mensaje_a_imprimir, mes):
    print("------------------")
    print(mensaje_a_imprimir)
    if mes == 11:
        print("Aún no es diciembre")
    
    elif mes==12:
        print("Ya casi navidad")

    else:
        print("Ya pasaron las fiestas")

    print("------------------")


mostrarMensaje("Hola, estamos en noviembre", 12)
