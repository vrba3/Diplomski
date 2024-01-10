import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  findByCarIdUrl: string;
  findByOwnersEmailUrl: string;
  getAllUrl: string;
  saveUrl: string;

  constructor(private http: HttpClient) { 
    this.findByCarIdUrl = 'http://localhost:8080/registrations/getByCarId';
    this.findByOwnersEmailUrl = 'http://localhost:8080/registrations/getByOwnersEmail';
    this.getAllUrl = 'http://localhost:8080/registrations/getAll'
    this.saveUrl = 'http://localhost:8080/registrations/saveReg'
  }

  public findByCarId(carId: number): Observable<Registration> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("carId",carId);
    return this.http.get<Registration>(this.findByCarIdUrl, {headers: headers, params: params});
  }

  public findByOwnersEmail(): Observable<Registration[]> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("email",sessionStorage.getItem('ownersEmail'));
    return this.http.get<Registration[]>(this.findByOwnersEmailUrl, {headers: headers, params: params});
  }

  public getAll(): Observable<Array<Registration>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Array<Registration>>(this.getAllUrl, {headers: headers});
  }

  public saveReg(registration: Registration):Observable<Registration>{
    return this.http.post<Registration>(this.saveUrl,registration);
  }
}
