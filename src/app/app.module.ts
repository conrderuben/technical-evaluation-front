import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { ListExpensesComponent } from './Expense/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './Expense/add-expense/add-expense.component';
import {FormsModule} from '@angular/forms'
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent,
    ListExpensesComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
