import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/Model/Expense';
import { Team } from 'src/app/Model/Team';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  users:any = [];
  expense:Expense = new Expense();
  user:User = new User();
  team:Team = new Team(1);
  date:Date = new Date();
  

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(data=>{
      console.log(data);
      this.users = data;
    })
    
  }

  selectChange(event:Event){
    this.expense.user = this.user;
  }

  addExpense(){
    this.expense.team = this.team;
    this.service.addExpense(this.expense)
    .subscribe(data=>{
      this.router.navigate(['list-expenses'])
    })
  }

}
