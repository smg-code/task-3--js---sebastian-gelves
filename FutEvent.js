

function EventFut (array){
  let arrayDeEventos = array
  
  let body = ``;
  const tagToUpdate = document.getElementById("targFut");
  console.log("tagToUpdate", tagToUpdate);
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

EventFut(eventos)