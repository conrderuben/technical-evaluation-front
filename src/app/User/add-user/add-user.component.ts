import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User = new User();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.user)
    this.service.addUser(this.user)
    .subscribe(data=>{
      this.router.navigate(['list-expenses'])
    })
  }

}
