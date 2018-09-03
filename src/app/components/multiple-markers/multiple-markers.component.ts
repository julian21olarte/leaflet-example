import { ReportsService } from './../../services/reports.service';
import { MarkerService } from './../../services/marker.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-multiple-markers',
  templateUrl: './multiple-markers.component.html',
  styleUrls: ['./multiple-markers.component.css']
})
export class MultipleMarkersComponent implements OnInit {

  private options: any;
  private layers: Array<any>;
  private marker: any;
  constructor(private markerService: MarkerService, private reportsService: ReportsService) {
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

    this.reportsService.getReports()
    .subscribe(reports => {
      if (reports) {
        this.layers = reports.map((report: any) => this.markerService.createMarker(report.lat, report.lng, report.type));
      }
    });

  }

  ngOnInit() {}
}
