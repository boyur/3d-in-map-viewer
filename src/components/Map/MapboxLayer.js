import {MapboxLayer as MapboxLayerNoBlend} from '@deck.gl/mapbox';
import { drawLayer } from '@deck.gl/mapbox/src/deck-utils';

class MapboxLayer extends MapboxLayerNoBlend {
  render(gl, matrix) {
    gl.enable(gl.DEPTH_TEST);

    this.deck.setProps({
      viewState: this._getViewState()
    });
    drawLayer(this.deck, this);
  }
}

export default MapboxLayer;