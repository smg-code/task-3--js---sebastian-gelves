

function EventFut (array){
  let arrayDeEventos = array
  
  let body = ``;
  const tagToUpdate = document.getElementById("targFut");
  //console.log("tagToUpdate", tagToUpdate);
  for (let i = 0; i < arrayDeEventos.length; i++) {
      if (fecha<arrayDeEventos[i].date){
        /*let arrayFut = []
        arrayFut.push(arrayDeEventos[i])
        console.log(arrayFut)*/
      body += `
              <div class= "col-xs-12 col-sm-6 col-md-4 col-lg-3 card m-1" style="width: 18rem;"> 
                <img  src = ${arrayDeEventos[i].image} alt="#">
                <h4 class="card-title text-center">${arrayDeEventos[i].name}</h4>
                <p class="card-text text-center">${arrayDeEventos[i].description}</p>
                <div class="row precio-Info">
                      <div class="col-6">
                          <p>Price $ ${arrayDeEventos[i].price}</p>
                      </div>
                      <div class="col-6">
                          <a href="./Ficha.html?id=${arrayDeEventos[i]._id}" class="boton-ficha">Info</a>
                      </div>
                </div>
              </div>
      `;
    }    
  }
  tagToUpdate.innerHTML = body;
}

EventFut(eventos)

let Categorias = [] //tipos va a ser el array que va a tener los tipos de CATEGORIAS // SIN repetirse
eventos.forEach(each => {                          //recorre el array evento ./Ficha.html?id=${eventos[i]._id
    if ( ! Categorias.includes(each.category) ) {  //si la categoria no esta, // la agrego al la array Categoria                                           
        Categorias.push(each.category)
    }    
})                                                 //console.log(Categorias) //muestra las diferentes categorias

// generar la barra con los checkbox y el search //
function checkBoxesYSearch(id_etiquetas,category) { //id_etiqueta id en el section de la html // category: las categoria, luego le ingreso la array: Categorias
    let barraSelectorYBusqueda = document.querySelector(id_etiquetas); //busca la etiqueta en el html - <section ... id="SelectroYBusquedaFuturas">
    //genera los checkbox
    category = category.map(each=> { //recorre la array Categoria y va generando los checkbox - los ${each} son los elementos dentro del array
        return `
        <fieldset>
                <label class="contact-label" for="${each}">${each}</label>
                <input onclick="captureData()" class="class_checks contact-input" 
                type="checkbox" value="${each}" name="tipo" id="${each}">
        </fieldset>
        `;
    })
    //genera el search para la busqueda
    category.push(`<input onkeyup="captureData()" id="ID_BUSQUEDA" 
    class="contact-input" type="text" name="texto" placeholder="Busqueda">`) 
    barraSelectorYBusqueda.innerHTML = category.join('');
}
//const elements = ['Fire', 'Air', 'Water']; ***Que hace el join***
//console.log(elements.join());
//Expected output: "Fire,Air,Water"

checkBoxesYSearch('#SelectroYBusquedaFuturas',Categorias) //llama la funcion checkBoxesYSearch

//ESTA PARTE HACE FUNCIONAL LOS CHECKBOX Y LA SEPARACION ENTRE CATEGORIAS
let nofound = [{_id: 0,
        "image":"https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_1280.png",
        "name":"No se encontro evento",
        "date":"2023-12-12", //fecha futura para que funciones son el if
        "description":"haga una nueva busqueda.",
}]
function captureData() {
    //busco el selector de busqueda - el que tiene el id:ID_BUSQUEDA de los checkbox y capturo su valor
    //el input tiene la captura de teclas: onkeyup="captureData()" //activa la funcion
    let texto = document.getElementById('ID_BUSQUEDA').value.toLocaleLowerCase() //el .toLocaleLowerCase() convierte el texto ingresado en minuscula
    console.log(texto)
    //busco los selectores con clase .class_checks:checked y que esten activados
    //la funcion .from genera un array con los check activos
    //la funcion map recorre uno por uno
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    //console.log(checks) //por consola veo que categorias se seleccionaron
    //filtrado: recorro la array de datos 'eventos' busco en los name 
    let filtro = eventos.filter(each => {
        each.name = each.name.toLocaleLowerCase() //con .toLocaleLowerCase() convierto el texto en minuscula
        //Con include recorre cada elemento buscando el texto  Y (que la parte de 
        //check de categorias este sin seleccionar o que si selecciona alguna
        //descarta la busqueda en las otras
        return ((each.name.includes(texto)) && 
        (checks.length === 0 || checks.includes(each.category)))
    })
    console.log(filtro)
    if (filtro.length>0) {
      EventFut(filtro);
    } else {
      EventFut(nofound);
    }
}
