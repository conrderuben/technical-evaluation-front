import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'technical-evaluation';

  constructor(private router: Router) {}

  listExpenses() {
    this.router.navigate(['list-expenses']);
  }

  addExpense() {
    this.router.navigate(['add-expense']);
  }

  addUser() {
    this.router.navigate(['add-friend']);
  }
}
