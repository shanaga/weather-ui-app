import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const WeatherCityComponent = () => import('./components/weather-city/weather-city.component').then(m => m.WeatherCityComponent);

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: "weather", loadChildren: WeatherCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

