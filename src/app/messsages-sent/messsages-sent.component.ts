import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messsages-sent',
  templateUrl: './messsages-sent.component.html',
  styleUrls: ['./messsages-sent.component.css']
})
export class MesssagesSentComponent implements OnInit {

  constructor(private service:MessageService, private local:LocalStorageService,private route: Router) { }
  firstname:any="";

  list:any=[];
  ngOnInit(): void {
    if( this.local.retrieve('loggedin') == false    ){
      this.route.navigate(["/"])
    }
    var test=this.local.retrieve("user");
    console.log(test.id)
    this.service.getMessageSent(test.id).subscribe(
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
    deleteMessage(id){
      this.service.deleteMsgById(id).subscribe(
        data=>{
          console.log(data);
          window.location.reload();
        },err=>{
          console.log(err);
        }
      )

    }

    Search(){
      if(this.firstname ==""){
        this.ngOnInit();
      }
      else{
      
        this.list=Object.values(this.list).filter(res=>{
  
          console.log(res)
             return res.userreceive.nom.toLocaleLowerCase().match(
            this.firstname.toLocaleLowerCase());
          //  return res.employee_name.match(
          //    this.firstname);
        })
        
      }
    }

    key:string='id'
reverse:boolean=false;
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
   
}
