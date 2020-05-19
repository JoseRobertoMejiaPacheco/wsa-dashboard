import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDataSets, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { QueryMdxOlapService } from 'src/app/services/db/olap_query.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css'],
})
export class BarsComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public pieChartColors = [];
  public barChartLabels = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: ChartDataSets[] = [{ data: [], label: '' }];
  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
  constructor(
    private httpClient: HttpClient,
    private service: QueryMdxOlapService
  ) {}

  randomize() {
    this.barChartData = [];
    this.barChartLabels = [];
    let dataToSend = {
      clients: this.service.globalSelectedClients,
      months: this.service.globalSelectedMonths,
      years: this.service.globalSelectedYears,
    };
    this.httpClient
      .post(`http://localhost:89/isscjrmp/nortwind/GetDataBar`, dataToSend)
      .subscribe((res: any) => {
        this.barChartData = res.map((res) => res);
        this.ChangeChartColors();
        console.log(this.barChartData);
      });
    this.httpClient
      .post(`http://localhost:89/isscjrmp/nortwind/GetLabelsBar`, dataToSend)
      .subscribe((res: any) => {
        this.barChartLabels = res.map((res) => res);
        console.log(res);
      });
    //console.log(this.barChartLabels);
    return null;
  }
  DynamicColors() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgba(' + r + ',' + g + ',' + b + ')';
  }

  ChangeChartColors() {
    let colorsArray: string[] = [];
    let chartData = this.barChartData;
    chartData.forEach((element) => {
      colorsArray.push(this.DynamicColors());
    });
    let pieChartColors = [
      {
        backgroundColor: colorsArray,
      },
    ];
    this.pieChartColors = pieChartColors;
    console.log(pieChartColors);
  }
}
