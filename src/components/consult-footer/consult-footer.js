
import './consult-footer.css';
import Button from '../button/button';


const ConsultFooter = ({ exportContent }) => {
  // Rodapé com botões de exportação e histórico
  return (
    <div id='consult-buttons-wrapper'>

      <Button label='Histórico' type='historic' linkPath={'/historic'} />

      <Button label='Exportar' type='export' exportContent={exportContent} />

    </div>
  )
}

export default ConsultFooter;