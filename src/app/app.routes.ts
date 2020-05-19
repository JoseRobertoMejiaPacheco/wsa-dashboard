import { RouterModule, Routes } from '@angular/router';
import { PieImplementedComponent } from './components/implemented_charts/pie-implemented/pie-implemented.component';
import { BarsComponent } from './components/charts/bars/bars.component';
const APP_ROUTES: Routes = [
    { path: 'Bar', component: BarsComponent },
    { path: 'Pie', component: PieImplementedComponent }
    ,
    // { path: 'heroes', component: HeroesComponent },
    // { path: 'heroe/:id', component: HeroeComponent },
    // { path: 'buscar/:termino', component: BuscadorComponent },
    // { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
  