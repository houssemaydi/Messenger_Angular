import { User } from './../model/user';
import { Router } from '@angular/router';
import { Message } from './../model/message';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {


  constructor(private service:MessageService, private local:LocalStorageService,private route: Router) { }
  idu:any;
  users:any=[];
  msg = new Message();
  ngOnInit(): void {
    if( this.local.retrieve('loggedin') == false    ){
      this.route.navigate(["/"])
    }
    this.service.getAllUsers().subscribe(
      data=>{
        this.users=data;
        console.log(this.users);
      },err=>{
        console.log(err);
      }
    )
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
     async SendMsg(){
    this.msg.id=null;
    this.msg.usersend=this.local.retrieve("user");
    this.service.getUserById(this.idu).subscribe(
      data=>{
        this.msg.userreceive=data;
      },err=>
      console.log(err)
    )
    await this.sleep(1000);
    console.log(this.msg);
    this.service.sendMessage(this.msg).subscribe(
      data=>{
        console.log(this.msg);
        console.log("sent");
        this.route.navigate(["MessageSent"])
      },err=>{console.log(err)}
    );
  }

  

}
