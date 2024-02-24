import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

export default function MapNew() {
  const position = {lat: 3.106026972295699, lng: 101.59766799903595};

  return (
    <APIProvider apiKey={'AIzaSyBlnjZNLQZ0XvwEnODwHDmSQmKYgg9rlGk'}>
      <div className="Map h-[450px]  lg:h-[300px]">
        <Map defaultCenter={position} defaultZoom={15}>
          <Marker position={{ lat: 3.106026972295699, lng: 101.59766799903595 }} />
        </Map>
      </div>
    </APIProvider>
  );
}


