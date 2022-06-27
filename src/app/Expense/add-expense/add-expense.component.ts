import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/Model/Expense';
import { Team } from 'src/app/Model/Team';
import { User } from 'src/app/Model/User';
import { ExpenseService } from 'src/app/Service/expense.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  users: User[] = [];
  expense: Expense = new Expense();
  user: User;
  team: Team = { id: 1 };
  date: Date = new Date();

  constructor(
    private expenseService: ExpenseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  selectChange(event: Event) {
    this.expense.user = this.user;
  }

  addExpense() {
    this.expense.team = this.team;
    this.expenseService.addExpense(this.expense).subscribe(data => {
      this.router.navigate(['list-expenses']);
    });
  }
}
