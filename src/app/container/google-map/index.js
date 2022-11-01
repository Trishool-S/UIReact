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
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './map.scss';
import './marker.scss';
// import Box from '@material-ui/core/Box';


const mapStyles = {
  width: '50%',
  height: '95.5%' 
};


export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

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
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: 23.39886785,
          lng: 72.32708097
        }}

        onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
          name={'Mehsana wells Details'}
          position={{ lat: 23.587961, lng: 72.369324 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.39613333, lng: 72.3267335 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.39886785, lng: 72.32708097 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.39943709, lng: 72.32383298 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4016408, lng: 72.31861569 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4004936, lng: 72.32581946 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4044475, lng: 72.32694971 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4267763, lng: 72.36933417 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4308, lng: 72.3758 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4444953, lng: 23.4444953 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4326, lng: 72.38176111 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4216099, lng: 72.388424 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4216099, lng: 72.388424 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4308761, lng: 72.37583361 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4355063, lng: 72.38000278 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.4312455, lng: 72.38946017 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.43597586, lng: 72.3870021 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.45027778, lng: 72.3875 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.40173869, lng: 72.31842054 }} />
        <Marker onClick={this.onMarkerClick}
          name={''}
          position={{ lat: 23.40444755, lng: 72.32694971 }} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE'
})(MapContainer);




