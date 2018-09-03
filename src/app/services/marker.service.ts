import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor() {
    L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
  }


  public createMarker(lat, lng, type, popupText = null, options = {}) {
    const marker = L.marker([ lat, lng ], this.getMarkerOptions(type, options));
    return popupText ? marker.bindPopup(popupText) : marker;
  }


  private getMarkerOptions(type, options) {
    return {
      ...options,
      icon:  L.AwesomeMarkers.icon(this.getIconOptions(type))
    };
  }

  private getIconOptions(type) {
    switch (type) {
      case 'SUCCESS': return {icon: 'location-arrow', markerColor: 'green'};
      case 'DANGER':  return {icon: 'exclamation', markerColor: 'red'};
      case 'INFO':    return {icon: 'info', markerColor: 'blue'};
      case 'HOLE':    return {icon: 'road', markerColor: 'black'};
    }
  }
}
