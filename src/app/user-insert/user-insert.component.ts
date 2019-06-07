import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {

  constructor() { }

  name:String
  phone:number=0
  balance:number=0

  ngOnInit() {
  }

  submit() {
    var form = $('<form/>', {
        action: 'api/user',
        method: 'post'
    });
    if(this.name === '' || this.phone === 0 || this.balance === 0 ){
      alert("enter Values")
      return
    }
    form.append($('<input/>', {
        type: 'hidden',
        name: 'name',
        value: this.name
    }));
    form.append($('<input/>', {
      type: 'hidden',
      name: 'phone',
      value: this.phone
    }));
    form.append($('<input/>', {
      type: 'hidden',
      name: 'balance',
      value: this.balance
    }));    
    form.appendTo('body').submit();
  }

}
