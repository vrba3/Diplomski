import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Car } from '../model/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private getAllCarsUrl: string;
  private getSearchedCarsUrl: string;
  private getOpenedCarUrl: string;

  constructor(private http: HttpClient) {
    this.getAllCarsUrl = 'http://localhost:8080/cars/allCars'
    this.getSearchedCarsUrl = 'http://localhost:8080/cars/searchedCars'
    this.getOpenedCarUrl = 'http://localhost:8080/cars/openedCar'
  }

  public getAllCars(): Observable<Array<Car>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get<Array<Car>>(this.getAllCarsUrl, {headers: headers});
  }

  public getSearchedCars(text: string): Observable<Array<Car>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("text",text);

    return this.http.get<Array<Car>>(this.getSearchedCarsUrl, {headers: headers, params: params});
  }

  public getOpenedCar(): Observable<Car> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("id",Number(sessionStorage.getItem('carId')));
    return this.http.get<Car>(this.getOpenedCarUrl, {headers: headers, params: params});
  }
}
