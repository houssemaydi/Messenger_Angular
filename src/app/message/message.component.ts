import { Router } from '@angular/router';
import { Message } from './../model/message';
import { LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private service:MessageService, private local:LocalStorageService,private route: Router) { }

  objet:any;
  ngOnInit(): void {
    if( this.local.retrieve('loggedin') == false    ){
      this.route.navigate(["/"])
    }
    var test=this.local.retrieve("message");
    console.log(test.id)
    this.service.GetMessageById(test.id).subscribe(
      data=>{
        this.objet=test;
        console.log(this.objet);
      },
      err=>{
        console.log(err);
  }
    )
  }

}
