from datetime import date, datetime

print("Hola Python")

mensaje = "Hola desde Python"

print(mensaje)


# Manejo de objetos
ahora = date.today()
print(ahora)

if ahora.month == 11:
    print("Es noviembre")

elif ahora.month == 12:
    print("Diciembre")
    if ahora.month == 3:
        print("algo")

else:
    print("Es otro mes")


