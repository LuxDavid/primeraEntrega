const realizarCompra=()=>{

let producto=parseInt(prompt('Elige la opcion de compra correspondiente al producto que quiere adquirir 1.Control PS4 , 2. Control XBOX ONE, 3.Control PS5 '));
let cantidad=parseInt(prompt('Cuantos desea adquirir'));
let total=0;

while(isNaN(producto) || producto <=0 || producto >3 || isNaN(cantidad) || cantidad <=0) {
    producto=parseInt(prompt('Elige la opcion de compra correspondiente al producto que quiere adquirir 1.Control PS4 , 2. Control XBOX ONE, 3.Control PS5 '));
    cantidad=parseInt(prompt('Cuantos desea adquirir'));
    
}
 
    switch(producto){

        case 1:
        total=900*cantidad
        break;
        
        case 2:
        total=1100*cantidad
        break;
        
        case 3:
        total=1500*cantidad
        break;
        
        }

    
console.log(`El total es ${total}`);


}


realizarCompra();

