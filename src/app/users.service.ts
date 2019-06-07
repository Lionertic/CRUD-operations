import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from './Users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('/api/users')
  }

  deleteUser(id){
    return this.http.delete<JSON>('/api/user/'+id)
  }
}
