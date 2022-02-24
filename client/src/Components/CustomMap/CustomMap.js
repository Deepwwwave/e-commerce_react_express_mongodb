import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "375px",
  height: "250px",
};

const center = {
  lat: 46.62785814013222,
  lng: -1.731228343964681,
};

function CustomMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCQut2WrR3La-nyLFNi5m6f22WiITImoCA",
  });

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
    >
      <Marker onLoad={onLoad} position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(CustomMap);
