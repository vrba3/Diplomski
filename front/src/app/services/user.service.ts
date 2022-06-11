import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getAllUsersUrl: string;
  private loginUserUrl: string;
  private getLoggedUserUrl: string;
  private registerUserUrl: string;
  private editUserUrl: string;
  private deleteUserUrl: string;
  private getUserFromPostUrl: string;

  constructor(private http: HttpClient) {
    this.loginUserUrl = 'http://localhost:8080/users/login';
    this.getLoggedUserUrl = 'http://localhost:8080/users/getLoggedUser';
    this.registerUserUrl = 'http://localhost:8080/users/registerUser';
    this.editUserUrl = 'http://localhost:8080/users/editUser';
    this.getAllUsersUrl = 'http://localhost:8080/users/allUsers';
    this.deleteUserUrl = 'http://localhost:8080/users/deleteUser';
    this.getUserFromPostUrl = 'http://localhost:8080/users/userFromPost';
  }

  public getAllUsers(): Observable<Array<User>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get<Array<User>>(this.getAllUsersUrl, {headers: headers});
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
  
  public getUserFromPost(email: string): Observable<User> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("email",email);
    return this.http.get<User>(this.getUserFromPostUrl, {headers: headers, params: params});
  }

  public registerUser(user: User): Observable<string> {
    return this.http.post<string>(this.registerUserUrl, user, {responseType: 'text' as 'json'});
  }

  public editUser(user: User): Observable<boolean> {
    return this.http.put<boolean>(this.editUserUrl, user);
  }

  public deleteUser(user:User): Observable<boolean>{
    return this.http.post<boolean>(this.deleteUserUrl,user);
  }
}
