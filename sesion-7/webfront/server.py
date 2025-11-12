# Indicamos las rutas y demás configuraciones del servidor web

from flask import Flask, render_template

# Instanciar al servidor
app = Flask(__name__)

# Rutas

# index
@app.route("/")
def home():
    return render_template("index.html")

# pagina2
@app.route("/pagina-2")
def pagina2():
    return render_template("pagina2.html")

# informacion
@app.route("/no-encontrado")
def noencontrado():
    return "<h1>Esta ruta no existe<br/><a href='/'>Ir al home</a></h1>"


# Archivo/ruta principal
if __name__ == "__main__":
    app.run()
