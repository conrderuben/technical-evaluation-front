import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User = new User();

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.user)
    this.userService.addUser(this.user)
    .subscribe(data=>{
      this.router.navigate(['list-expenses'])
    })
  }

}
