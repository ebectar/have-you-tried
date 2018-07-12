import React from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'

class LeafMap extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={18}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.
              <br/>
              Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default LeafMap