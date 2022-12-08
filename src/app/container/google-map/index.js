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







// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import './map.scss';
// import './marker.scss';

// export class MapContainer extends React.Component {
//   state = { userLocation: { lat: 32, lng: 32 }, loading: true };

//   componentDidMount(props) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           userLocation: { lat: latitude, lng: longitude },
//           loading: false
//         });
//       },  
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }

//   render() {
//     const { loading, userLocation } = this.state;
//     const { google } = this.props;

//     if (loading) {
//       return null;
//     }

//     return <Map google={google} initialCenter={userLocation} zoom={10} />;
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE"
// })(MapContainer);




import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './map.scss';
import './marker.scss';
// import axios from 'axios';
// import { useSelector } from "react-redux";

let mapStyles = {
  width: '50%',
  height: '50%',
  margin: "200px auto"
};

// const initialCenter = {
//     lat: 23.427843,
//     lng: 72.334287
//   };
//   const initialCenter1 = {
//     lat: 23.033863,
//     lng: 72.585022
//   };
  
// const { loginInfo } = useSelector((state) => state.rLogin);
export class MapContainer extends React.Component {

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
  // renderDashboardbaseOnUserType = () => {
  //   if (loginInfo && loginInfo.user.type === "SuperAdmin") {
  //     return initialCenter;
  //   } else if (loginInfo && loginInfo.user.type === "Customer") {
  //     return initialCenter1;
  //   }
  // };

  render() {
    return (
      <>
        <div className="col-md-12">
          <div className="headersettings" role="heading">
            <span className="widget-icon"><i className="fa fa-table"></i></span>
            <div className="card-header border-0">
              <h4>Google Map</h4>
            </div>
          </div>
        </div>
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{
            lat: 23.427843,
            lng: 72.334287
          }}
          onClick={this.onMapClicked}>

          <Marker onClick={this.onMarkerClick}

            name={'Mehsana wells Details'}
            position={{ lat: 23.587961, lng: 72.369324 }}

            icon={{
              url: "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png",
            }} />
          <Marker onClick={this.onMarkerClick}
            name={'Area V Well Monitoring'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.39613333, lng: 72.3267335 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#62 well'}
            icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
            position={{ lat: 23.39886785, lng: 72.32708097 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#50 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.39943709, lng: 72.32383298 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#12 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.4016408, lng: 72.31861569 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#52 well'}
            icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
            position={{ lat: 23.4004936, lng: 72.32581946 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#40 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.4044475, lng: 72.32694971 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#92 well'}
            icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
            position={{ lat: 23.4267763, lng: 72.36933417 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#02 well'}
            icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
            position={{ lat: 23.4308, lng: 72.3758 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#66 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.4444953, lng: 23.4444953 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#86 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.4326, lng: 72.38176111 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#32 well'}
            position={{ lat: 23.4216099, lng: 72.388424 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#00 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.4216099, lng: 72.388424 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#55 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.4308761, lng: 72.37583361 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#72 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.4355063, lng: 72.38000278 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#88 well'}
            position={{ lat: 23.4312455, lng: 72.38946017 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#99 well'}
            icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
            position={{ lat: 23.43597586, lng: 72.3870021 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#51 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.45027778, lng: 72.3875 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#60 well'}
            position={{ lat: 23.40173869, lng: 72.31842054 }} />
          <Marker onClick={this.onMarkerClick}
            name={'LNC#33 well'}
            icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
            position={{ lat: 23.40444755, lng: 72.32694971 }} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.props.onClose}
          >
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
            </div>
          </InfoWindow>
        </Map></>
    );
  }
} 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE'
})(MapContainer);






// import React from 'react';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import './map.scss';
// import './marker.scss';
// // import axios from 'axios';
// import { useSelector } from "react-redux";


// let mapStyles = {
//   width: '50%',
//   height: '50%',
//   margin: "200px auto"
// };

// const initialCenter = {
//   lat: 23.427843,
//   lng: 72.334287
// };
// const initialCenter1 = {
//   lat: 23.033863,
//   lng: 72.585022
// };


// export function MapContainer(props) {
  

//   const { loginInfo } = useSelector((state) => state.rLogin);


//   const defaultProps = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };    

//   const onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   const onClose = () => {
//     if (defaultProps.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };
  

//   const renderDashboardbaseOnUserType = () => {
//     if (loginInfo && loginInfo.user.type === "SuperAdmin") {
//       return initialCenter;
//     } else if (loginInfo && loginInfo.user.type === "Customer") {
//       return initialCenter1;
//     }
//   };

//   return (
//     <>
//       <div className="col-md-12">
//         <div className="headersettings" role="heading">
//           <span className="widget-icon"><i className="fa fa-table"></i></span>
//           <div className="card-header border-0">
//             <h4>Google Map</h4>
//           </div>
//         </div>
//       </div>
//       <Map
//         google={props.google}
//         zoom={11}
//         style={mapStyles}
//         initialCenter={renderDashboardbaseOnUserType()}
//         onClick={props.onMapClicked} 
//       >

//         <Marker onClick={onMarkerClick}
//           name={'Mehsana wells Details'}
//           position={{ lat: 23.587961, lng: 72.369324 }}
//           icon={{
//             url: "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png",
//           }} />
//         <Marker onClick={onMarkerClick}
//           name={'Area V Well Monitoring'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.39613333, lng: 72.3267335 }} />
//           <Marker onClick={onMarkerClick}
//           name={'LNC#111'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.033863, lng: 72.585022 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#62 well'}
//           icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
//           position={{ lat: 23.39886785, lng: 72.32708097 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#50 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.39943709, lng: 72.32383298 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#12 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.4016408, lng: 72.31861569 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#52 well'}
//           icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
//           position={{ lat: 23.4004936, lng: 72.32581946 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#40 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.4044475, lng: 72.32694971 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#92 well'}
//           icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
//           position={{ lat: 23.4267763, lng: 72.36933417 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#02 well'}
//           icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
//           position={{ lat: 23.4308, lng: 72.3758 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#66 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.4444953, lng: 23.4444953 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#86 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.4326, lng: 72.38176111 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#32 well'}
//           position={{ lat: 23.4216099, lng: 72.388424 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#00 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.4216099, lng: 72.388424 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#55 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.4308761, lng: 72.37583361 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#72 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.4355063, lng: 72.38000278 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#88 well'}
//           position={{ lat: 23.4312455, lng: 72.38946017 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#99 well'}
//           icon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Pink.png'
//           position={{ lat: 23.43597586, lng: 72.3870021 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#51 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.45027778, lng: 72.3875 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#60 well'}
//           position={{ lat: 23.40173869, lng: 72.31842054 }} />
//         <Marker onClick={onMarkerClick}
//           name={'LNC#33 well'}
//           icon='https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/32/MapMarker_Marker_Outside_Chartreuse.png'
//           position={{ lat: 23.40444755, lng: 72.32694971 }} />

//         <InfoWindow
//           marker={defaultProps.activeMarker}
//           visible={defaultProps.showingInfoWindow}
//           onClose={onClose}
//         >
//           <div>
//             <h6>{defaultProps.selectedPlace.name}</h6>
//           </div>
//         </InfoWindow>
//       </Map></>
//   );
// }


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAToPYxlf5KrYWm3BA58CmJvdVbPSG-6RE'
// })(MapContainer);


