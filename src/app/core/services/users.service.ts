import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Token } from '../interfaces/users.interfaces';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(login: Login): Observable<Token> {
    return this.http.post<Token>(`${environment.api}` + `${environment.endPoints.users.path}` + `${environment.endPoints.users.login}`, login);
  }

  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  cleanSession(): void {
    sessionStorage.clear();
  }
}
