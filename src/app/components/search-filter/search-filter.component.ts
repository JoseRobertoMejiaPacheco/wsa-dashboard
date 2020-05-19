import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryMdxOlapService } from 'src/app/services/db/olap_query.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
  constructor(private service: QueryMdxOlapService) {}
  dimensions: string[] = ['Cliente'];
  months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  public clients = this.service.getItemsByDimension();
  public years: string[] = ['1996', '1997', '1998'];
  public selectedDimension = [];
  public selectedClients = [];

  public selectedMonths = [];
  public selectedYears = [];
  ngOnInit() {
    // No se puede mapear un solo elemeto
    // this.dimensions = this.service.getItemsByDimension();
    console.log(this.clients);
  }
  onChange() {
    // console.log(this.selectedDimension);
    // const selectedC = this.selectedClients.map((res) => res.$ngOptionLabel);
    // console.log(selectedC);
    // console.log(this.selectedMonths);
    // console.log(this.selectedYears);
    // console.log(selectedC);
    const selectedC = this.selectedClients.map((res) => res.$ngOptionLabel);
    this.service.ee = 'From filter';
    // console.log(this.service.ee);
    this.service.globalSelectedClients = selectedC;
    // console.log(this.service.globalSelectedClients);
    // console.log(this.selectedMonths);
    this.service.globalSelectedMonths = this.selectedMonths as any[];
    this.service.globalSelectedYears = this.selectedYears as any[];
    console.log(this.service.globalSelectedYears);
  }
}
