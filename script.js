// Creando el huevo de pascua
const tuki = document.querySelector(".tuki");
// Agregando el audio
const audio = new Audio("audio/tuki.m4a");
// Arrays principales para las combinaciones de teclas
var huevo = [ 'ArrowLeft', 'ArrowLeft', 'ArrowUp', 'ArrowUp', 'ArrowRight', 'ArrowRight', 'ArrowDown', 'ArrowDown' ];
var teclasPres = [];

// Estableciendo sólo el index.html dentro del scope
if (document.location.pathname == '/index.html') {
    // Listener para eventos del teclado
    window.addEventListener( 'keydown', ( e ) => {
        // Agregar esos eventos al array teclasPres
        teclasPres.push( e.key );
        // Quitar elementos extra de teclasPres para que
        // no superen el largo del array huevo y poder 
        // realizar la comparación a continuación
        teclasPres.splice( ( -huevo.length -1 ) , ( teclasPres.length - huevo.length ) );
        // Si el string resultado de unir todos los elementos 
        // del array teclasPres es igual que el string resultado 
        // de unir todos los elementos del array huevo, entonces
        // realizar las acciones correspondientes
        if ( teclasPres.join( '' ) === huevo.join( '' )) {
            audio.play();
            if (tuki.classList.contains("activado")) {
                tuki.classList.remove("activado");
            } else {
                tuki.classList.add("activado");
            }
        }
    })
}


// Responsive TopNav
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

// JS Mail
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mgp.smtp.test@gmail.com",
        Password : "47778B1FDD81FF79531B574551F705AE7DAE",
        To : 'mgp.smtp.test@gmail.com',
        From : document.getElementById(email).value,
        Subject : "Eroica Cards, Solicitud de Contacto",
        Body : "Nombre: " + document.getElementById(nombre).value
        + "<br> Email: " + document.getElementById(email).value
        + "<br> Mensaje: " + document.getElementById(mensaje).value
    }).then(
        message => alert("Mensaje enviado correctamente. Lo contactaré a la brevedad.")
    );
}