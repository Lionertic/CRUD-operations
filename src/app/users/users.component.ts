import { Component, OnInit } from '@angular/core';
import {User} from '../Users';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]

  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( users => this.users= users)
  }

}
