import './table.css';

function Table({ content }) {
  // Percorre o array content para construir a tabela
  return (
    <div id='table-wrapper'>

      <table>

        <thead>

          {content?.map((item = {}, i) => {
            if (i === 0) // Condição para verificar se é cabeçalho
              return (
                <tr key={i}>
                  {Object.keys(item).map(key => <th key={key}>{item[key]}</th>)}
                </tr>
              )
          })}

        </thead>

        <tbody>

          {content?.map((item, i) => {
            if (i !== 0) // Condição para verificar se é corpo
              return (
                <tr key={i}>
                  {Object.keys(item).map(key => {
                    // Filtro para bandeira ou coordenadas
                    if (key !== 'flag' && key !== 'coordinates')
                      return (<td key={key}>{item[key]}</td>)
                  })}
                </tr>
              )
          })}
        </tbody>

      </table>

    </div>
  )
}

export default Table;