# Instalar JAVA para probar los ejemplos

Se necesita **chocolatey** para instalar JAVA desde consola.

Copiar el comando de aquí:

> https://chocolatey.org/install

Instalar JAVA desde terminal usando `chocolatey`

> Abrir CMD como administrador y ejecutar `choco install openjdk`

## Compilar y ejecutar

Compilar una clase con el siguiente comando. (El archivo de este ejemplo se llama **Main.java**)

> javac Main.java

Ejecutar la clase.

> java Main

## Probar proyecto de spring boot

Instalar maven

> choco install maven

Compilar nuestro proyecto con el comando

> mvn compile

Si todo es correcto, usar

> mvn test

Empaquetar (compilar todo en un solo archivo **.jar** dentro de **target**)

> mvn package

Ejecutar con

> java -jar .\target\backend-0.0.1-SNAPSHOT.jar

