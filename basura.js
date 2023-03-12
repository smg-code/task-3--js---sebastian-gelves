const selectorCategoria1 = document.getElementById("Categoria-1")
for (let i = 0; i < eventos.length; i++) {

}

function SeleccionCategorias (array){
  let arrayDeEventos = array
  const seleccionPorCategoria = arrayDeEventos.filter(user => user ===  "Mariano")
  const mariansArray = users.filter(user => user ===  "Mariano")



  let body = ``;
  const selectorCategoria1 = document.getElementById("Categoria-1")
    selectorCategoria1.addEventListener('toggle', (e))
    console.log(e)
  
  const selectorCategoria2 = document.getElementById("Categoria-2")
  const selectorCategoria3 = document.getElementById("Categoria-3")
  const selectorCategoria4 = document.getElementById("Categoria-4")
  const selectorCategoria5 = document.getElementById("Categoria-5")
  const selectorCategoria6 = document.getElementById("Categoria-6")
  const selectorCategoria7 = document.getElementById("Categoria-7")

  //const tagToUpdate = document.getElementById("targFut");
  //console.log("tagToUpdate", tagToUpdate);
  for (let i = 0; i < arrayDeEventos.length; i++) {
      if (fecha<arrayDeEventos[i].date){
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
                          <a href="Ficha.html" class="boton-ficha">Info</a>
                      </div>
                </div>
              </div>
      `;
    }    
  }
  tagToUpdate.innerHTML = body;
}

SeleccionCategorias(eventos)

const selectorCategoria1 = document.getElementById("Categoria-1")
let e =0
selectorCategoria1.addEventListener.t
selectorCategoria1.addEventListener('click', (e) => {
console.log(e)  
})
