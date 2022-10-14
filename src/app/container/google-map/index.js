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
// // import wells from './wells';

// const AnyReactComponent = ({ text }) => (
//   <div className="marker">
//     <div className="marker-pin"> </div>
//   </div>
// );

// function WellMap() {
//   return (
//     <Box>
//       <Separator text="Asset Map Overview" />
//       <Box className="map-container">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE' }}
//           initialCenter={{
//             lat: 23.587961,
//             lng: 72.369324
//           }}
//           defaultZoom={13}
//           options={{ styles: mapStyles }}
//         >
//             <AnyReactComponent
//               lat={23.587961}
//               lng={72.369324}
//               text="My Marker"
//             />
//         </GoogleMapReact>
//       </Box>
//     </Box>
//   );
// };

// export default WellMap;
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './map.scss';
import './marker.scss';
// import Box from '@material-ui/core/Box';


const mapStyles = {
  width: '50%',
  height: '97%'
};
const AnyReactComponent = ({ text }) => (
  <div className="marker">
    <div className="marker-pin"> </div>
  </div>
);
// const Marker = props => {
//   return <div className="marker">
//    <div className="marker-pin"></div>
//    </div>
// }


export class MapContainer extends Component {
  render() {
    return (
      // <>
      //   <Map
      //     google={this.props.google}
      //     zoom={9}
      //     style={mapStyles}
      //     initialCenter={{
      //       lat: 23.587961,
      //       lng: 72.369324
      //     }}
      //     onClick={this.onMapClicked}

      //   />
      //   <Marker lat={23.586761} lng={72.369949} />
      //   <AnyReactComponent
      //     lat={23.587961}
      //     lng={72.369324}
      //     text="My Marker"
      //   />
      // </>
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{
          lat: 23.587961,
          lng: 72.369324
        }}

        onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'}
          position={{ lat: 23.587961, lng: 72.369324 }} />
        <Marker onClick={this.onMarkerClick}
          name={'Current location'}
          position={{ lat: 23.51401, lng: 72.182881 }} />
        <Marker onClick={this.onMarkerClick}
          name={'Current location'}
          position={{ lat: 23.033863, lng: 72.585022 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE'
})(MapContainer);




