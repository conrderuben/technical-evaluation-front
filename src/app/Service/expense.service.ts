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

  getExpenses() : Observable<Expense[]>{
    return this.http.get<Expense[]>(environment.apiURL + '/expenses/');
    
  }

  getBalance(){
    const result = this.http.get(environment.apiURL + '/expenses/getBalance');
    return result;
  }

  addExpense(expense:Expense) : Observable<void>{
    return this.http.post<void>(environment.apiURL + '/expenses/', expense);

  }

}


