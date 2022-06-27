import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { ListExpensesComponent } from './Expense/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './Expense/add-expense/add-expense.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseService } from './Service/expense.service';
import { UserService } from './Service/user.service';

@NgModule({
  declarations: [AppComponent, AddUserComponent, ListExpensesComponent, AddExpenseComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ExpenseService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
