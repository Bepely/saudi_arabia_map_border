import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var anychart: any;

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrl: './map1.component.scss',
})
export class Map1Component implements OnInit {
  constructor(@Inject(DOCUMENT) private mapDocument: Document) {}

  ngOnInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    this.mapDocument.getElementById('container')!.textContent = '';

    anychart.data.loadJsonFile('assets/reordered_saudi_arabia.geojson', (data: any) => {
      const map = anychart.map();
      map.geoData(data);

      // Apply background and styling
      map.unboundRegions().fill('#121268').stroke('rgb(203,214,236)', 2);
      map.background().fill('#13172F');

      // Define the choropleth dataset
      const regionData = [
        {
          id: 'SA.4293',
          name: 'saudi',
          value: 8,
          'middle-x': 20,
          'middle-y': 20,
        },
        { id: 'SA.NJ', value: 13, fill: '#141A38' },
        { id: 'SA.RI', name: 'Riyadh', value: 13, fill: '#121732' },
        { id: 'SA.SH', name: 'Eastern\n Province', value: 5, fill: '#141A38' },
        { id: 'SA.MD', value: 5, fill: '#141A38' },
        { id: 'SA.QS', name: 'Qasim', value: 5, fill: '#10152D' },
        {
          id: 'SA.HA',
          value: 13,
          'middle-x': 0.4,
          'middle-y': 0.4,
          fill: '#121732',
        },
        {
          id: 'SA.TB',
          name: 'Tabuk',
          value: 8,
          'middle-x': 0.3,
          'middle-y': 0.2,
          fill: '#10152D',
        },
        {
          id: 'SA.HS',
          name: 'North \n Province',
          value: 8,
          'middle-x': 0.7,
          'middle-y': 0.6,
          fill: '#10152D',
        },
        { id: 'SA.JF', value: 5, fill: '#141A38' },
        {
          id: 'SA.BA',
          value: 5,
          'middle-x': 0.5,
          'middle-y': 0.3,
          fill: '#141A38',
          label: { rotation: 290 },
        },
        { id: 'SA.AS', value: 13, fill: '#121732' },
        {
          id: 'SA.JZ',
          name: 'Jazan',
          value: 8,
          'middle-x': 0.7,
          'middle-y': 0.3,
          fill: '#10152D',
          label: { rotation: 60 },
        },
        {
          id: 'SA.MK',
          name: 'Makkah',
          value: 5,
          'middle-x': 0.5,
          'middle-y': 0.3,
          fill: '#10152D',
        },
        { id: 'SA.ALL', name: 'Saudi Arabia Overall', stroke: { color: '#4271d5', thickness: 3 }, label: {enabled: false} }
      ];

      // Create the choropleth series
      const series = map.choropleth(regionData);
      series.geoIdField('id');
      series.normal().stroke('#212642')
      series.hovered().stroke('#212642 1');
      series.hovered().fill('transparent');

      // Configure the color scale
      series.colorScale(anychart.scales.linearColor("#e0f3db", "#0868ac"));

      var labels = series.labels().enabled(true);
      labels.fontColor('#AAAAAA');
      labels.fontSize('7.25px');
      labels.offsetY('10');

      // Set zoom controls
      map.zoom(0.1);
      map.interactivity().zoomOnMouseWheel(true);
      map.maxZoomLevel(100);
      map.minZoomLevel(0.01);

      // Render map in container
      map.container('container');
      map.draw();

    });
  }
}
