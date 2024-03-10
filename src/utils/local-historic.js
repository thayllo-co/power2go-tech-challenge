// Recupera o histórico atual
export const getHistoric = () => {
  let restoredHistoric = localStorage.getItem('historic');
  restoredHistoric = JSON.parse(restoredHistoric);
  return restoredHistoric;
}


export const addSearchToHistoric = (text, results) => {
  // Formata dados
  const historic = {
    date: Date.now(),
    text,
    results
  };

  // Recupera o histórico atual
  let restoredHistoric = getHistoric();

  if (restoredHistoric) {
    // Adiciona item ao histórico atual
    restoredHistoric.push(historic);
    localStorage.setItem('historic', JSON.stringify(restoredHistoric));
  }
  else {
    // Cria um novo histórico
    let historicArray = [];
    historicArray.push(historic);
    localStorage.setItem('historic', JSON.stringify(historicArray));
  }
}