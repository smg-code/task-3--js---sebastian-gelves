//SECCION DE SELECCION Y BUSQUEDA //
//EN ESTA SECCION CREAMOS LOS CHECKBOX Y EL CASILLA DE BUSQUEDA//

// HAGO UN RECORRIDO POR EL ARRAY EVENTOS Y SELECCIONO LAS Categorias - sin repetirse  //
/**************** funcionamiento include **********
 *              const array1 = [1, 2, 3];
                console.log(array1.includes(2));
                // Expected output: true

                const pets = ['cat', 'dog', 'bat'];
                console.log(pets.includes('cat'));
                // Expected output: true

                console.log(pets.includes('at'));
                // Expected output: false  */
//**********************************************************/
let Categorias = [] //tipos va a ser el array que va a tener los tipos de CATEGORIAS
// SIN repetirse
eventos.forEach(each => {                          //recorre el array evento
    if ( ! Categorias.includes(each.category) ) {  //si la categoria no esta, 
                                                   // la agrego al la array Categoria
        Categorias.push(each.category)
    }    
})

//console.log(Categorias) //muestra las diferentes categorias

// generar la barra con los checkbox y el search //

function checkBoxesYSearch(id_etiquetas,category) { //pido una etiqueta de un selector y
    // el array que contiene las categorias
    let barraSelectorYBusqueda = document.querySelector(id_etiquetas); //busca la etiqueta
    console.log("barraSelectorYBusqueda", barraSelectorYBusqueda); // muestra por consola 
    //la donde encuentra la etiqueta
    //recorre el array category y  va generando los checkbox, con el nombre de las 
    //categorias
    category = category.map(each=> { 
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
    class="contact-input" type="text" name="texto" placeholder="Busqueda"> 
    <a href="#" class="lupa" ><i class=" fa-sharp fa-solid 
    fa-magnifying-glass"></i></a>`)
    barraSelectorYBusqueda.innerHTML = category.join('');
}

checkBoxesYSearch('#SelectroYBusqueda',Categorias)

//ESTA PARTE HACE FUNCIONAL LOS CHECKBOX Y LA SEPARACION ENTRE CATEGORIAS
let nofound = [{_id: 0,
        "image":"https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_1280.png",
        "name":"No se encontro evento",
        "description":"haga una nueva busqueda.",
}]
function captureData() {
    //busco el selector de busqueda - el que tiene el id:ID_BUSQUEDA y capturo su valor
    //el input tiene la captura de teclas: onkeyup="captureData()" //activa la funcion
    let texto = document.getElementById('ID_BUSQUEDA').value.toLocaleLowerCase()
    //el .toLocaleLowerCase() convierte el texto ingresado en minuscula

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
        mostraCards(filtro);
       // printTemplates('#pet_container',filtro)
    } else {
        mostraCards(nofound);
       // notFound('#pet_container')
    }
}


//funcionamiento funcion from //
/*
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));  [1+1 2+2 3+3]
// Expected output: Array [2, 4, 6]
*/