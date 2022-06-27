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
    const actualDate = new Date();
    const actualTime = actualDate.getTime();
    const time = this.date.getTime();
    const timeDiff = Math.round((actualTime - time) / (1000 * 60));

    if (timeDiff < 0) {
      return 'Ahora';
    } else if (timeDiff < 60) {
      return timeDiff + ' minutos';
    } else if (timeDiff < 1440) {
      return Math.round(timeDiff / 60) + ' horas';
    } else if (timeDiff < 43200) {
      return Math.round(timeDiff / 1440) + ' días';
    } else if (timeDiff < 525600) {
      return Math.round(timeDiff / 43200) + ' meses';
    } else {
      return 'Más de un año';
    }
  }

  getNameByUserId(id: Id): string {
    return this.users.find(user => user.id === id)?.name ?? '';
  }
}
