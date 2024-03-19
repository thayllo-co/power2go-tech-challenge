import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';


const Table = ({ content }) => {
  return (
    // AutoSizer para dimensionar o tamanho da tabela
    <AutoSizer>
      {({ height, width }) => {

        // Calcula a largura da coluna com base no cabeçalho
        let dynamicColumnWidth = width / Object.keys(content[0]).length;
        dynamicColumnWidth = dynamicColumnWidth > 150 ? dynamicColumnWidth : '150px';

        return (
          <FixedSizeList // Componente react-window com seus parâmetros configurados
            width={width}
            height={height}
            itemCount={content?.length}
            itemSize={30}
            style={{ scrollbarWidth: 'none' }}
          >
            {({ index, style }) => (  // função callback anônima para renderizar as linhas
              <div id='table-row' key={index} style={style}>
                {Object.keys(content[index]).map(key => {
                  // Filtro para bandeira ou coordenadas
                  if (key !== 'flag' && key !== 'coordinates')
                    return (
                      <div
                        id='table-cell' key={key} style={{ width: dynamicColumnWidth }}
                        className={index === 0 ? 'table-heading' : ''}>
                        <p id="table-text">{content[index][key]}</p>
                      </div>
                    )
                })}
              </div>
            )
            }
          </FixedSizeList>
        )
      }}
    </AutoSizer >
  )
}

export default Table;