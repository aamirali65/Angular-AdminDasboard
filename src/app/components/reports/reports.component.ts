import { Component } from '@angular/core';
import { ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
  public barChartType: keyof ChartTypeRegistry = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81], label: 'Series A' },
    { data: [28, 48, 40, 19], label: 'Series B' }
  ];
}
