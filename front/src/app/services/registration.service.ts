import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  findByCarIdUrl: string;

  constructor(private http: HttpClient) { 
    this.findByCarIdUrl = 'http://localhost:8080/registrations/getByCarId';
  }

  public findByCarId(carId: number): Observable<Registration> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("carId",carId);
    return this.http.get<Registration>(this.findByCarIdUrl, {headers: headers, params: params});
  }
}
