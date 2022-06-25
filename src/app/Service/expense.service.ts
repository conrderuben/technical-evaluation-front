import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Expense } from '../Model/Expense';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http:HttpClient) { }

  getExpenses(){
    const result = this.http.get<Expense[]>(environment.apiURL + '/expenses/');
    return result;
  }

  getBalance(){
    const result = this.http.get(environment.apiURL + '/expenses/getBalance');
    return result;
  }

  addExpense(expense:Expense) : Observable<Object>{
    const result = this.http.post(environment.apiURL + '/expenses/', expense);
    return result;
  }

}


