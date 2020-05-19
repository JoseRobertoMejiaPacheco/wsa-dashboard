import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { QueryMdxOlapService } from 'src/app/services/db/olap_query.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
})
export class LinesComponent implements OnInit {

  constructor(private _service: QueryMdxOlapService) {
    console.log('Constructor');
  }
  public customer$: string[];
  public lineChartData: ChartDataSets[] = this._service.getLineChartDataSet();
  //public itemsCmb: l[] = this._service.getItemsCmb();
  public lineChartLabels: Label[] = this._service.GetLabelLineChartLabels(
  //public lineChartLabels: Label[] = this._service.GetLabelLineChartLabels(
    this.lineChartData
  );
  public lineChartOptions: any = {
    responsive: true,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public aaaa: any = this._service.getItemsCmb();
  ngOnInit(): void {}

  public randomize(): void {
    console.log("aaaaaaaaaaaaaaaaaaaa");
    this.customer$ = this._service.getItemsByDimension();
    console.log(this.customer$);
    console.log("aaaaaaaaaaaaaaaaaaaa");
  }

  public forInTable(): void {}
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
