const openModal = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');

const isVisibility="es-visible";

for(const el of openModal){
el.addEventListener('click', function (){
const modId = this.dataset.open;
document.getElementById(modId).classList.add(isVisibility);
});
}
for(const el of closeEls){
    el.addEventListener('click', function (){
      this.parentElement.parentElement.parentElement.classList.remove(isVisibility);
    });
    }
   
    enviar = () =>{
      const nombre = document.getElementById('nombre').value;
      const apellido=document.getElementById('apellido').value;
      const numeroCaracteres = nombre.length;
      const numeroCaracteresApellido= apellido.length;
      const edad=document.getElementById('txtEdad').value;


      if(numeroCaracteres<=0){
        alert("El nombre no puede estar vacio");
      }else if(numeroCaracteres>=25){
        alert("supero el limite permitido");
     document.getElementById('nombre').value="";
      }


      if(numeroCaracteresApellido<=0){
        alert("el apellido no puede estar vacio");
      }else if(numeroCaracteresApellido>=25){
        alert("supero el numero de limite permitido");
        document.getElementById('apellido').value="";
      }

    
      if((numeroCaracteres>0 && numeroCaracteres<=25) && (numeroCaracteresApellido>0 && numeroCaracteresApellido <=25)) {
        const agregarTexto =  document.getElementById('agregarTitulo').innerHTML=" bienvenido/a "  + "  " + nombre + " " + apellido + " tu edad es " +edad;
             }

      // prompt(edad); // ventana para ingresar un tipo de valor
    // trim elimina solo espacios al principio y al final 
      let nombre2 = nombre.replace(/ /g,"");
    // replace permite eliminar completamente los espacios en blanco
      document.getElementById('nombre').value="";
      document.getElementById('apellido').value="";
    }
  
  
    
agregar = (e) => {
  e.preventDefault();
  const ul =document.getElementById('ul-navegacion');
  let li = document.createElement('li');
  let elementos = prompt("ingrese un elemento para insertar a la lista ");
  li.appendChild(document.createTextNode(elementos));
  ul.appendChild(li);

}
 
