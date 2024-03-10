import './grid.css';
import Card from '../card/card';


function Grid({ content }) {
  // Percorre o array content para construir a grade de cartões
  return (
    <div id='grid-wrapper'>
      
      {content?.map((item, i) => {
        if (i !== 0)
          return <Card key={i} data={item} />
      })}

    </div>
  )
}

export default Grid;