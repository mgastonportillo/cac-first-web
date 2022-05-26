// RESPONSIVE TOPNAV
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
// Conmutador
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // ícono de menú tipo hamburguesa
        toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-bars'></i>";
    } else {
        menu.classList.add("active");
        // Ícono de cerrar menú "x"
        toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }
}
/* Listener para el conmutador */
toggle.addEventListener("click", toggleMenu, false);


// VALIDACIONES DEL FORMULARIO
function validar() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  var error = document.getElementById("error");
  
  error.style.padding = "8px 18px 7px 18px";
  
  var text;
  if(nombre.length < 3){
    text = "Por favor, ingrese un nombre valido";
    error.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Por favor, ingrese un mail valido";
    error.innerHTML = text;
    return false;
  }
  if(mensaje.length <= 20){
    text = "Por favor, ingrese al menos 20 caracteres";
    error.innerHTML = text;
    return false;
  }
  alert(`¡${nombre}, gracias por contactarme!"`);
  return true;
}


// HUEVO DE PASCUA
const tuki = document.querySelector(".tuki");
// Agregando el audio
const audio = new Audio("audio/tuki.m4a");
// Arrays principales para las combinaciones de teclas
var huevo = [ 'ArrowLeft', 'ArrowLeft', 'ArrowUp', 'ArrowUp', 'ArrowRight', 'ArrowRight', 'ArrowDown', 'ArrowDown' ];
var teclasPres = [];

// Estableciendo sólo el index.html dentro del scope
if(document.location.pathname == "/" , "/index.html") {
    // Listener para eventos del teclado
    window.addEventListener( 'keydown', ( e ) => {
        // Agregar esos eventos al array 'teclasPres'
        teclasPres.push( e.key );
        // Quitar elementos extra de 'teclasPres' para que
        // no superen el largo del array 'huevo' y poder 
        // realizar la comparación a continuación
        teclasPres.splice( ( -huevo.length -1 ) , ( teclasPres.length - huevo.length ) );
        // Si el string resultante de unir todos los elementos 
        // de 'teclasPres' es igual que el string resultante 
        // de unir todos los elementos de 'huevo', entonces
        // realizar las acciones correspondientes
        if( teclasPres.join( '' ) === huevo.join( '' )) {
            audio.play();
            if(tuki.classList.contains("activado")) {
                tuki.classList.remove("activado");
            } else {
                tuki.classList.add("activado");
            }
        }
    })
}