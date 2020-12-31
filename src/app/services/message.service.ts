import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  checklogin(data):Observable<User>{
    return this.http.post<User>("http://localhost:8080/login",data);
  }

  getMessageRecived(id){
    return this.http.get("http://localhost:8080/GetAllMessageRecived/"+id);
  }

  getMessageSent(id){
    return this.http.get("http://localhost:8080/GetAllMessageSent/"+id);
  }


  GetMessageById(id){
    return this.http.get("http://localhost:8080/GetMessage/"+id);

  }

  getAllUsers(){
    return this.http.get("http://localhost:8080/GetAllUser");
  }

  sendMessage(data){
    return this.http.post("http://localhost:8080/sendMessage",data);
  }

  getUserById(id){
    return this.http.get("http://localhost:8080/GetUser/"+id);
  }

  deleteMsgById(id){
    return this.http.delete("http://localhost:8080/deleteMessage/"+id);

  }

  addUser(data){
    return this.http.post("http://localhost:8080/addUser",data);

  }
}
