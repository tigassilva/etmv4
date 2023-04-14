let menu = document.querySelector('.material-symbols-outlined')
let itens = document.querySelector('.cabecalho__lista')

menu.addEventListener('click', abrirMenu)




function abrirMenu(){
   
  itens.classList.toggle('cabecalho__lista__active')
 
}
