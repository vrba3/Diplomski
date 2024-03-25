import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Car } from '../model/car';
import { Observable } from 'rxjs';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private getAllCarsUrl: string;
  private getSearchedCarsUrl: string;
  private getOpenedCarUrl: string;
  private getUserCarsUrl: string;
  private deleteCarUrl: string;
  private editCarUrl: string;
  private addCarUrl: string;
  private uploadImgUrl: string;
  private deleteFolderUrl: string;
  private deletePhotoUrl: string;
  private getByIdUrl: string;

  constructor(private http: HttpClient) {
    this.getAllCarsUrl = 'http://localhost:8080/gateway/cars'
    this.getSearchedCarsUrl = 'http://localhost:8080/gateway/cars/searchedCars'
    this.getOpenedCarUrl = 'http://localhost:8080/gateway/cars/openedCar'
    this.getUserCarsUrl = 'http://localhost:8080/gateway/cars/userCars'
    this.deleteCarUrl = 'http://localhost:8080/gateway/cars/deleteCar'
    this.editCarUrl = 'http://localhost:8080/gateway/cars/editCar'
    this.addCarUrl = 'http://localhost:8080/gateway/cars/addCar'
    this.uploadImgUrl = 'http://localhost:8080/gateway/cars/uploadPhoto'
    this.deleteFolderUrl = 'http://localhost:8080/gateway/cars/deleteFolder'
    this.deletePhotoUrl = 'http://localhost:8080/gateway/cars/deletePhoto'
    this.getByIdUrl = 'http://localhost:8080/gateway/cars/getById'
  }

  public getById(id: number): Observable<Car> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("id",id);

    return this.http.get<Car>(this.getByIdUrl, {headers: headers, params: params});
  }

  public getAllCars(): Observable<Array<Car>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get<Array<Car>>(this.getAllCarsUrl, {headers: headers});
  }

  public getUserCars(): Observable<Array<Car>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("email",sessionStorage.getItem('email'));

    return this.http.get<Array<Car>>(this.getUserCarsUrl, {headers: headers, params: params});
  }

  public addCar(car: Car):Observable<Car>{
    return this.http.post<Car>(this.addCarUrl,car);
  }

  public uploadPhoto(image:File, name:string):Observable<boolean> {
    const formData:FormData = new FormData();
    formData.append('image', image);
    let params = new HttpParams().set("name",name);

    return this.http.post<boolean>(this.uploadImgUrl, formData, {params: params});
  } 

  public deleteFolder(car: Car):Observable<boolean> {
    return this.http.post<boolean>(this.deleteFolderUrl, car);
  } 

  public deletePhoto(image: File, name:string):Observable<boolean> {
    const formData:FormData = new FormData();
    formData.append('image', image);
    let params = new HttpParams().set("name",name);

    return this.http.post<boolean>(this.deletePhotoUrl, formData, {params: params});
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

  public getOpenedCarFromPosts(): Observable<Car> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("id",Number(sessionStorage.getItem('userCarId')));
    return this.http.get<Car>(this.getOpenedCarUrl, {headers: headers, params: params});
  }

  public editCar(car: Car): Observable<boolean> {
    return this.http.put<boolean>(this.editCarUrl, car);
  }

  public deleteCar(car:Car): Observable<boolean>{
    return this.http.post<boolean>(this.deleteCarUrl,car);
  }
}
