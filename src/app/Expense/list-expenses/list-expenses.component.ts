import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/Model/Expense';
import { ServiceService} from '../../Service/service.service'

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  expenses:Expense[] = [];
  balance:any = [];
  date:Date;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getExpenses()
    .subscribe(data=>{
      this.expenses = data;
    })

    this.service.getBalance()
    .subscribe(data =>{
      console.log(data)
      this.balance = data;
    })

  }

  getTimeFromDate(expense:Expense){
    this.date = new Date(expense.date);
    const actualDate = new Date();
    const actualTime = actualDate.getTime();
    const time = this.date.getTime();
    const timeDiff = Math.round((actualTime - time) / (1000 * 60));

      if(timeDiff < 0){
        return "Ahora";
    }else if(timeDiff < 60){
        return timeDiff + " minutos";
    }else if(timeDiff < 1440){
        return Math.round(timeDiff/60) + " horas";
    }else if(timeDiff < 43200){
        return Math.round(timeDiff/1440) + " días";
    }else if(timeDiff < 525600){
        return Math.round(timeDiff/43200) + " meses";
    }else{
      return "Más de un año";
    }
    }

}
