import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id:string;
  name:string;
  phone:number;
  balance:number;

  constructor(private userService:UsersService,private router:Router) {
    this.id=this.router.url.substring(7)
  }

  ngOnInit() {
  }

  update(){
    const user = {
      _id:this.id,
      Name:this.name,
      Phone:this.phone,
      Balance:this.balance
    }
    this.userService.updateUser(user)
      .subscribe((res)=>{
        this.router.navigate(['/users/list'])
      })
  }
}
