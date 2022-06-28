import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/Model/Expense';
import { Id } from 'src/app/Model/Id';
import { User } from 'src/app/Model/User';
import { ExpenseService } from 'src/app/Service/expense.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  balance: any = [];
  date: Date;
  users: User[] = [];

  constructor(
    private expenseService: ExpenseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(data => {
      this.expenses = data;
    });

    this.expenseService.getBalance().subscribe(data => {
      this.balance = data;
    });

    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  getTimeFromDate(expense: Expense) {
    this.date = new Date(expense.date);
    const formatter = new Intl.RelativeTimeFormat('en', {
      numeric: 'auto'
    });

    const DIVISIONS = [
      { amount: 60, name: 'seconds' },
      { amount: 60, name: 'minutes' },
      { amount: 24, name: 'hours' },
      { amount: 7, name: 'days' },
      { amount: 4.34524, name: 'weeks' },
      { amount: 12, name: 'months' },
      { amount: Number.POSITIVE_INFINITY, name: 'years' }
    ];

    let duration = (this.date.getTime() - new Date().getTime()) / 1000;

    for (let i = 0; i <= DIVISIONS.length; i++) {
      let division = DIVISIONS[i];
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name as Intl.RelativeTimeFormatUnit);
      }
      duration /= division.amount;
    }
    return 'now';
  }

  getNameByUserId(id: Id): string {
    return this.users.find(user => user.id === id)?.name ?? '';
  }
}
