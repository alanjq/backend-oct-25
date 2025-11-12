condicion = True
contador = 0
coleccion = [5,10, 20, 30, 'a'] # Arreglo, (lista o colección)
# indice

# for
for indice in coleccion:
    print(':FOR: Valor actual', indice)

# while
while contador < 10:
    print(":WHILE: Es correcto. Intento ", contador)
    contador+=1
    condicion = False
else: 
    print("Incorrecto")


  