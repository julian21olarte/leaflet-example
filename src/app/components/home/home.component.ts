import { MarkerService } from './../../services/marker.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private options: any;
  private layers: Array<any>;
  private marker: any;
  constructor(private markerService: MarkerService) {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          // tslint:disable-next-line:max-line-length
          attribution: 'Cloud Analytic transport <a href="https://www.github.com/julian21olarte/">julian21olarte</a> - <a href="https://www.github.com/brayammora">brayammora</a>'
        })
      ],
      zoom: 12,
      center: L.latLng(7.8939100, -72.5078200)
    };

    this.marker = this.markerService.createMarker(7.8939100, -72.5071200, 'INFO', 'Cucuta', {draggable: true});

    this.layers = [
      this.marker
    ];
  }

  ngOnInit() {
    // on drag marker
    this.marker.on('dragend', (event) => {
        const coordenates = {
          lat: event.target._latlng.lat,
          lon: event.target._latlng.lng
        };
        console.log(coordenates);
    });

    // on marker popup is open
    this.marker.on('popupopen', (event) => {
      this.marker.setPopupContent(
        `<p>Lat: ${event.target._latlng.lat}</p>
        <p>Lng: ${event.target._latlng.lng}</p>`);
    });
  }

  // move marker on map click
  public getCoordenatesOnClick(event) {
    this.marker.setLatLng(L.latLng(event.latlng.lat, event.latlng.lng));
  }

}
