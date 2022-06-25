import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Model/User';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() : Observable<Object>{
    const result = this.http.get(environment.apiURL + '/users/');
    return result;
  }

  addUser(user:User) : Observable<Object>{
    const result = this.http.post(environment.apiURL + '/users/', user);
    return result;
  }


}


