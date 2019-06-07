import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  public isView:boolean=true;  

  change(cha:boolean){
    this.isView=cha;
  }

  clicked(cha:boolean){
    alert('click')
    this.change(cha);
  }
}
