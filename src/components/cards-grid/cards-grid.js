import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid } from 'react-window';
import Card from '../card/card';


const CardsGrid = ({ content }) => {
  return (
    // AutoSizer para dimensionar o tamanho da tabela
    <AutoSizer>
      {({ height, width }) => {

        // Cálculo do número de colunas baseado na largura da tela (responsividade)
        let columns;
        if (width < 450)
          columns = 1;
        else if (width < 600)
          columns = 2;
        else if (width < 900)
          columns = 3;
        else
          columns = 4;

        return (
          <FixedSizeGrid // Componente react-window com seus parâmetros configurados
            width={width}
            height={height}
            columnCount={columns}
            columnWidth={width / columns}
            rowCount={Math.ceil(content?.length / columns)}
            rowHeight={290}
            style={{ scrollbarWidth: 'none' }}
          >
            {({ columnIndex, rowIndex, style }) => { // função callback anônima para renderizar as células
              const contentIndex = (rowIndex * columns) + columnIndex;
              if (content[contentIndex])
                return (
                  <div style={style}>
                    <Card key={contentIndex} data={content[contentIndex]} />
                  </div>
                )
              else
                return null;
            }}
          </FixedSizeGrid>)
      }
      }
    </AutoSizer>
  )
}

export default CardsGrid;