import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private selectedCitySubject = new BehaviorSubject<any>(null);
  selectedCity$ = this.selectedCitySubject.asObservable();

  constructor(private http: HttpClient) {}

  getCitiesByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.cityApiUrl}?name=${name}`);
  }

  getTemperature(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(`${environment.temperatureApiUrl}?latitude=${lat}&longitude=${lon}`);
  }

  setSelectedCity(city: any): void {
    this.selectedCitySubject.next(city);
  }
}