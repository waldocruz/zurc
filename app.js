const iconoMenu=document.querySelector('#icono-menu'),
    menu=document.querySelector('#menu');
iconoMenu.addEventListener('click',(e)=>{
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

   
});
var inicio = document.getElementById('inicio');
var proyecto = document.getElementById('proyecto');
var conocimiento = document.getElementById('conocimiento');
var i = document.getElementById('i');
function mostrar(x) {
 
    if (x === 'inicio') {
        inicio.style.display = 'block';
        proyecto.style.display='none';
        conocimiento.style.display='none';
    } else if (x === 'proyecto') {
        inicio.style.display = 'none';
        proyecto.style.display='block';
        conocimiento.style.display='none';
    }else if (x === 'conocimiento') {
        inicio.style.display = 'none';
        proyecto.style.display='none';
        conocimiento.style.display='block';
    }
}