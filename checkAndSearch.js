// Categorias - sin repetirse  //
const array1 = [1, 2, 3];
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
let Categorias = [] //tipos va a ser el array que va a tener los tipos de animal SIN repetirse
eventos.forEach(each => {
    if ( ! Categorias.includes(each.category) ) {
        Categorias.push(each.category)
    }    
})

console.log(Categorias)