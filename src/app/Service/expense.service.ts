import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../Model/Expense';
import { environment } from 'src/environments/environment';
import { Balance } from '../Model/Balance';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(environment.apiURL + '/expenses/');
  }

  getBalance(): Observable<Balance> {
    return this.http.get<Balance>(environment.apiURL + '/expenses/balance');
  }

  addExpense(expense: Expense): Observable<void> {
    return this.http.post<void>(environment.apiURL + '/expenses/', expense);
  }
}
