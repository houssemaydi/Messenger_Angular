import { Router } from '@angular/router';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:MessageService, private local:LocalStorageService,private route: Router) { }
  u=new User();
  ngOnInit(): void {
  }


  conect(){
    this.u.id=null;
    this.service.addUser(this.u).subscribe(
      data=>{
        console.log(data);
        alert("Welcome to Messenger");
      },err=>{
        console.log(err);
      }
    )
  }

}
