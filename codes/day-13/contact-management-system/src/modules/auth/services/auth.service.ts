import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ResponseMessage } from 'src/modules/contacts/models/responsemessage.model';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, @Inject('API_URL') private baseUrl: string) {

  }
  registerUser(email: string, password: string) {
    return this._http.post<ResponseMessage>(`${this.baseUrl}/user/register`, { email, password })
  }
  authenticateUser(email: string, password: string) {
    return this._http.post<ResponseMessage>(`${this.baseUrl}/user/authenticate`, { email, password })
  }
  savetoken(token: string) {
    sessionStorage.setItem('token', token)
  }
  isLoggedIn() {
    return sessionStorage.getItem('token') ? true : false
  }
  getToken() {
    return sessionStorage.getItem('token')
  }
  deleteToken() {
    sessionStorage.removeItem('token')
  }
}
