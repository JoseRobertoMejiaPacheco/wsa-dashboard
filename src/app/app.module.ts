import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/web/header/header.component';
import { LinesComponent } from './components/charts/lines/lines.component';
import { BarsComponent } from './components/charts/bars/bars.component';
import { DounotsComponent } from './components/charts/dounots/dounots.component';
import { RadarComponent } from './components/charts/radar/radar.component';
import { FooterComponent } from './components/web/footer/footer.component';
import {ChartsModule} from 'ng2-charts';
import { QueryMdxOlapService } from './services/db/olap_query.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';


import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PieComponent } from './components/charts/pie/pie.component';
import { PieImplementedComponent } from './components/implemented_charts/pie-implemented/pie-implemented.component';
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinesComponent,
    BarsComponent,
    DounotsComponent,
    RadarComponent,
    FooterComponent,
    SearchFilterComponent,
    PieComponent,
    PieImplementedComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [QueryMdxOlapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
