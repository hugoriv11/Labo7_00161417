/* "document.getElementById" */
/*1 y 2*/
var container = document.getElementById("c1");
console.log(container);


/*
window.addEventListener('load', () =>{
    let container = document.getElementById("c1");
    console.log(container);
}); */

/* PREGUNTAS
1.) Qué contiene la variable id?
<div class="container" id="c1"></div>

2.)¿Qué visualiza en el navegador? 
Dentro del div con id = c1, tiene un texto "¡Hola Mundo!"

3.)¿Qué es lo que se muestra en pantalla?
Una caja de texto para ingresar un dato

4.)¿Cuál es la diferencia entre las propiedades innerHtml e innerText?
innerHTML agrega codigo HTML e innerText agrega texto
*/

/*3*/
container.innerText = "¡Hola Mundo!";

/*4*/
container.style.backgroundColor = "#000000";

/*5*/
container.style.color = "#1cb723";

/*6*/
container.style.width = "200px";
container.style.height = "200px";

/*7*/
container.innerHTML = "<input type='text' placeholder='escriba su texto'>";

/* "document.getElementsByClassName" */
/*1*/
var containers = document.getElementsByClassName("c2");
console.log(containers);

/*PREGUNTAS*/
/*1.) ¿Qué almacena containers?
0:div.container.c2
1:div.container.c2
2:div.container.c2
3:div.container.c2
4:div.container.c2
5:div.container.c2
length:6

2.)¿Qué se mostrará en pantalla? 
Los divs con la clase c2 cambian al color dado

3.)¿Qué es lo que se muestra en pantalla?
Una caja de texto para ingresar un dato

4.)¿Cuál es la diferencia entre las propiedades innerHtml e innerText?
innerHTML agrega codigo HTML e innerText agrega texto
*/


/*2*/
for(let i=0;i<containers.length;i++) {
    containers[i].style.backgroundColor = "#009999";
}

/*3*/
containers.innerHTML = "<input type='text' placeholder='escriba su texto'>";