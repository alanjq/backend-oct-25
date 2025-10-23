let url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log('Datos de la API', data)
    llenarTabla(data)
})
.catch(error=>console.error(error))

function llenarTabla(datos){
    let htmlDatos = ""
    datos.map((fila)=>{
        htmlDatos += `<section class="card">
        <div class="card-footer hidden">${fila.id}</div>
        <div class="card-header text-bold">${fila.title}</div>
        <div class="card-body">${fila.body}</div>
        </section>`;
       
    })
    let datosTabla = document.getElementById('tableContent')
    console.log(datosTabla)
    datosTabla.innerHTML = htmlDatos
}
