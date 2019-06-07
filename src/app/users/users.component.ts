import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {User} from '../Users';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]

  @Output() clickEvent = new EventEmitter<boolean>()
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( users => this.users= users)
  }

  change(val:boolean){
    this.clickEvent.emit(false)
  }
}
