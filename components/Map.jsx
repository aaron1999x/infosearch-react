import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBlnjZNLQZ0XvwEnODwHDmSQmKYgg9rlGk",
  });
  const center = useMemo(() => ({ lat: 3.106026972295699, lng: 101.59766799903595 }), []);
  return (
    <div className="Map h-[450px]  lg:h-[300px]">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <MarkerF
            position={{ lat: 3.106026972295699, lng: 101.59766799903595 }}
            animation={google.maps.Animation.BOUNCE}
          />
        </GoogleMap>
      )}
    </div>
  )
}

export default Map