
let selectorDeCards; 


let claseParaOcultar; 


function filtrar(tipo) {
  
  const cards = document.querySelectorAll(selectorDeCards);

  
  cards.forEach(card => {
    
    
    if (tipo === 'todas') {
    
      card.classList.remove(claseParaOcultar);
    } 
    
    
    else if (tipo === 'vocales') {
      
      if (card.dataset.tipo === 'vocal') {
        
        card.classList.remove(claseParaOcultar);
      } else {
        card.classList.add(claseParaOcultar);
      }
    }

  });
}