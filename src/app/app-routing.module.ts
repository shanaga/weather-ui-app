import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { TemperatureDisplayComponent } from './components/temperature-display/temperature-display.component';

const routes: Routes = [
  { path: '', component: CitySearchComponent },
  { path: 'temperature', component: TemperatureDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
