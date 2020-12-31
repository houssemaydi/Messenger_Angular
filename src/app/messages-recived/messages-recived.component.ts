import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Message } from './../model/message';
import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-recived',
  templateUrl: './messages-recived.component.html',
  styleUrls: ['./messages-recived.component.css']
})
export class MessagesRecivedComponent implements OnInit {

  constructor(private service:MessageService, private local:LocalStorageService,private route: Router) { 

  }

  list:any=[];
  ngOnInit(): void {
    if( this.local.retrieve('loggedin') == false    ){
      this.route.navigate(["/"])
    }
    
    var test=this.local.retrieve("user");
    console.log(test.id)
    this.service.getMessageRecived(test.id).subscribe(
      data=>{
        this.list=data;
        console.log(data);
        
      },
      err=>{
        console.log(err);
  }
    )
  }
  checkMessage(id){
    this.service.GetMessageById(id).subscribe(
      data=>{
        this.local.store("message",data);
        console.log(data);
        this.route.navigate(['/Message']);

      },err=>{
        console.log(err);
      })
    }
}
