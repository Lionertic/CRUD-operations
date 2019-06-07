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

  updateUser(user:User){
    var header =new HttpHeaders();
    header.append('Content-Type','application/json');
    return this.http.put<JSON>('/api/user/'+user._id,user,{headers:header});
  }
}
