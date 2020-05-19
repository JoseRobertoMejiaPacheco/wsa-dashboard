import { Component } from '@angular/core';
import { Label } from 'ng2-charts';
import { QueryMdxOlapService } from './services/db/olap_query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wsa-dashboard';
  a: any[] = [];
  public dataDimension: Label[] = ['sdf','sdf','sdf'];
  public dataValues: number[] = [1,2,3];
  constructor(private service: QueryMdxOlapService) {}
  onChange() {
    // this.a = this.service.getDataPie();
    // console.log(this.a[0]);
  }
}
