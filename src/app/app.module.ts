import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

const appRoutes : Routes=[
  {path: 'users/list' , component: UsersComponent},
  {path: 'user/create', component: UserInsertComponent},
  {path: 'users/delete',component:UserDeleteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserInsertComponent,
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
