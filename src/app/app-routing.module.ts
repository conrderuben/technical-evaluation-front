import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './Expense/add-expense/add-expense.component';
import { ListExpensesComponent } from './Expense/list-expenses/list-expenses.component';
import { AddUserComponent } from './User/add-user/add-user.component';

const routes: Routes = [
  { path: 'add-friend', component: AddUserComponent },
  { path: 'list-expenses', component: ListExpensesComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'add-friend', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
