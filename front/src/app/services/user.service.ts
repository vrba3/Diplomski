import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUserUrl: string;
  private getLoggedUserUrl: string;
  private registerUserUrl: string;

  constructor(private http: HttpClient) {
    this.loginUserUrl = 'http://localhost:8080/users/login';
    this.getLoggedUserUrl = 'http://localhost:8080/users/getLoggedUser';
    this.registerUserUrl = 'http://localhost:8080/users/registerUser';
  }

  public login(user: User): Observable<User> {
    return this.http.post<User>(this.loginUserUrl, user);
  }

  public setEmail(email: string): void {
    sessionStorage.setItem('email', email); 
  } 

  public removeEmail(): void {
    sessionStorage.setItem('email', ''); 
  }

  public getLoggedUser(): Observable<User> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("email",sessionStorage.getItem('email'));
    return this.http.get<User>(this.getLoggedUserUrl, {headers: headers, params: params});
  }

  public registerUser(user: User): Observable<string> {
    return this.http.post<string>(this.registerUserUrl, user, {responseType: 'text' as 'json'});
  }
}
