import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import {User} from '../Users'
import {Router} from '@angular/router'
@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  users:User[]
  constructor(private userService:UsersService,private router:Router) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users=>this.users=users)
  }
  delete(id:number) {
    
    this.userService.deleteUser(id)
      .subscribe((val)=>{
        this.router.navigate(['/users/list'])
      })
  }

}
