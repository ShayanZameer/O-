// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";
// import "./App.css";

import { GoogleMap, Marker, useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { useState, useMemo,useCallback, useRef } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });
  const center = useMemo(() => ({  lat: 30.3753, lng: 69.3451 }), []);

  const [markers, setMarkers] = useState([]);
  const searchBoxRef = useRef();



  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    const newMarkers = places.map(place => ({
      position: place.geometry.location,
      name: place.name,
    }));
    setMarkers(newMarkers);

    if (places.length > 0) {
      const { location } = places[0].geometry;
      mapRef.current.panTo(location);
      mapRef.current.setZoom(10);
    }
  };







//   return (
//     <div className="h-[30vh] w-[100vw]">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName="h-[100%] w-[100%]"
//           center={center}
//           zoom={10}
//         />
//       )}
//     </div>
//   );


const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  



return (
    <div className="h-[30vh] w-[100vw] relative">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="h-[100%] w-[100%]"
          center={center}
          zoom={5}
        >
          <StandaloneSearchBox
            onLoad={ref => (searchBoxRef.current = ref)}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Search for places..."
              className="relative top-10 left-10  z-10 p-2 w-80 h-10 rounded border border-gray-300 shadow-md"
              style={{ boxSizing: `border-box` }}
            />
          </StandaloneSearchBox>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} label={marker.name} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
