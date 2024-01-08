import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  
  user !: User;

  login(creds : {FirstName : string, LastName : string, Password : string}) {
    return this.http.post('https://localhost:7272/api/Auth/login', creds);
  }
}
