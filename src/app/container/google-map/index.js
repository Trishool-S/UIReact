// import React, { useEffect } from "react";

// function GoogleMap(){
//     useEffect(()=>{
//         const ifameData=document.getElementById("iframeId")
//         const lat=22.309425;
//         const lon=72.136230;
//         ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
//     })
//     return(
//         <div>
//             <iframe id="iframeId" height="1000px" width="50%"></iframe>
//         </div>
//     );
// }
// export default GoogleMap;

// import React from 'react';
// import Box from '@material-ui/core/Box';
// import GoogleMapReact from 'google-map-react';

// import Separator from './separator';

// import { mapStyles } from './app_constants';

// import './map.scss';
// import './marker.scss';

// const AnyReactComponent = ({ text }) => (
//   <div className="marker">
//     <div className="marker-pin"> </div>
//   </div>
// );

// const WellMap = ({ wells }) => {
//   return (
//     <Box>
//       <Separator text="Asset Map Overview" />
//       <Box className="map-container">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE' }}
//           // defaultCenter={wells[0].geolocation}
//           defaultZoom={13}
//           options={{ styles: mapStyles }}
//         >
//           {/* {wells.slice(0, 10).map((well) => (
//             <AnyReactComponent
//               key={well.uuid}
//               lat={well.geolocation.lat}
//               lng={well.geolocation.lng}
//               text="My Marker"
//             />
//           ))} */}
//         </GoogleMapReact>
//       </Box>
//     </Box>
//   );
// };

// export default WellMap;
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './map.scss';
import './marker.scss';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={
          {
            lat:23.587961,
            lng:72.369324
          }
        }
        
        text="My Marker"
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE'
})(MapContainer);



