import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from 'src/app/models/chart.model';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.scss']
})
export class HighchartComponent {
  donutChart = new Chart(donutChartOptions)
  constructor() { }


}
