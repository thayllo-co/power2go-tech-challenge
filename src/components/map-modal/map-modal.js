import './map-modal.css';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Modal from 'react-modal';
import Button from '../button/button';
import PagePlaceholder from '../page-placeholder/page-placeholder';
import { GOOGLE_API_KEY } from '../../utils/consts';
Modal.setAppElement('#root');


function MapModal({ isOpen, setIsOpen, countryData }) {

  // Hook para rastrear quando o mapa é carregado
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Estilos do modal
  const customStyles = {
    content: {
      display: 'flex',
      margin: 'auto',
      height: 'fit-content',
      width: 'fit-content',
      borderRadius: '15px'
    },
  };

  // Propriedades iniciais do mapa
  const defaultProps = {
    center: {
      lat: countryData?.coordinates?.length > 0 ? countryData?.coordinates[0] : -13.4112649,
      lng: countryData?.coordinates?.length > 0 ? countryData?.coordinates[1] : -73.1873174,
    },
    zoom: 5
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}>

      <div id="modal-wrapper">

        <p id='modal-header-text'>{countryData.name}</p>

        <div id="map-frame">

          {/* Exibir placeholder se não estiver carregado */}
          {!isMapLoaded && <PagePlaceholder />}

          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onGoogleApiLoaded={() => { setIsMapLoaded(true) }}
            yesIWantToUseGoogleMapApiInternals={true}>
          </GoogleMapReact>

        </div>

        <Button label="Sair" onClick={() => setIsOpen(false)} />

      </div>

    </Modal>
  );
}

export default MapModal;