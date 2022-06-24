import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Expense } from '../Model/Expense';
import { User } from '../Model/User';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getExpenses(){
    const result = this.http.get<Expense[]>('http://localhost:8080/Backend/expenses/');
    return result;
  }

  getBalance(){
    const result = this.http.get('http://localhost:8080/Backend/expenses/getBalance');
    return result;
  }

  addExpense(expense:Expense) : Observable<Object>{
    const result = this.http.post('http://localhost:8080/Backend/expenses/', expense);
    return result;
  }

  getUsers(){
    const result = this.http.get('http://localhost:8080/Backend/users/');
    return result;
  }

  addUser(user:User) : Observable<Object>{
    const result = this.http.post('http://localhost:8080/Backend/users/', user);
    return result;
  }


}


