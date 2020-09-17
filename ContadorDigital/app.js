console.log("GASTOS DESDE JS");

console.log("*********************EJERCICIO*********************");
let y = document.getElementById("calc");
y.style.display = "none";


function mostrar() {

    /* recuperar variable por eso se pone .value es comunicacion de html a js */
    /* NOTA si no ocupamos el value se recupera el elemento pero como etiqueta */
    var cantidad = document.getElementById("dinero").value;

    /* comunicacion de js a html con .innerHTML*/
    document.getElementById("cantidad").innerHTML = `$ ${cantidad}`;

    console.log("entra a funcion mostrar");
    let x = document.getElementById("ingreso");


    /* dobles == es comparación */
    // x es el id ingreso, no se muestra al principio = "none"?
    if(x.style.display =="none"){
        // si, si se muestra ="block"
        x.style.display = "block";
        // no quiero que se muestre "y" = "none"
        y.style.display = "none";
    }else{
        /* un = es asignación */
        x.style.display = "none";
        y.style.display = "block";
    }
}

function calcula(){
    
    // también se puede hacer de esta manera
    var cantidad = document.getElementById("dinero").value;

    /* los console.log ayudaron a saber si aparecían las variables en la consola */
    // console.log(cantidad);

    let renta = document.getElementById("renta").value;
    
    // console.log("renta ---->", renta);

    let servicios = document.getElementById("servicios").value;

    // console.log("servicios ---->", servicios);

    let total = cantidad - renta - servicios;

    // console.log("total", total);

    document.getElementById("total").innerHTML = `Te sobran : $ ${total} pesos`

    if(total >= 150){
        console.log("Sí puedes ir por unos de cabeza");
        Swal.fire({
            title: 'Ve por unos de cabeza y una agua de horchata!',
            icon: 'success',
            html:
              'You can use <b>Taquería Euzkaro</b>, ' +
              '<a href="//sweetalert2.github.io">links</a> ' +
              'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Ahv!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i> Chále!',
            cancelButtonAriaLabel: 'Thumbs down'
          })
    }else{
        console.log("Haste unos huevos :(");
        Swal.fire({
            title: 'Haste unos huevos :(',
            icon: 'error',
            html:
              'You can use <b>bold text</b>, ' +
              '<a href="//sweetalert2.github.io">links</a> ' +
              'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Ahv!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i> Chále!',
            cancelButtonAriaLabel: 'Thumbs down'
          })
    }




}