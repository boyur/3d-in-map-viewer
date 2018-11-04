import React, { PureComponent } from 'react';
import MapGL from '@urbica/react-map-gl';
import { Geometry } from 'luma.gl'
import {MeshLayer} from '@deck.gl/experimental-layers';
import MapboxLayer from './MapboxLayer';
import 'mapbox-gl/dist/mapbox-gl.css';

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

const viewport = {
  latitude: 55.722472916437056,
  longitude: 37.77715528573401,
  zoom: 15,
  pitch: 41.50000000000001,
  bearing: -2.6046388463507
};

const accessToken = 'pk.eyJ1IjoiYm95dXJhcnRlbSIsImEiOiJjajBkeWY4ZmwwMDEyMzJseG8wZDI4YW5pIn0.DBEWyIXo3VknCRDcqa7Msg'; // Mapbox access token

class Map extends PureComponent {
  mapGlRef = React.createRef();

  componentDidMount() {
    this.map = this.mapGlRef.current.getMap();
  }

  componentDidUpdate(prevProps) {
    const { object } = this.props;
    if (prevProps.object) {
      this.map.removeLayer('MeshLayer');
    }

    if (object) {
      console.log(object);
      const geom = new Geometry({
        id: 'geom',
        attributes: {
          positions: new Float32Array(object.vertices),
          normals: new Float32Array(object.vertexNormals),
          texCoords: new Float32Array(object.textures),
          indices: new Uint16Array(object.indices)
        }
      });

      const Layer = new MapboxLayer({
        id: 'MeshLayer',
        type: MeshLayer,
        texture: 'texture.png',
        data: [{
          position: [37.77392141114508, 55.723356145146304],
          angle: -119,
          roll: 90
        }],
        sizeScale: 1,
        mesh: geom,
        lightSettings: {
          lightsPosition: [0, 50, 20000],
          specularRatio: 0.5,
          ambientRatio: 0.3,
          diffuseRatio: 0.2
        }
      });

      this.map.addLayer(Layer);
    }
  }

  render() {
    return (
      <MapGL
        ref={this.mapGlRef}
        style={style}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={accessToken}
        {...viewport}
        onViewportChange={viewport => {
          // Call `setState` and use the state to update the map.
        }}
      />
    )
  }
}

export default Map;
