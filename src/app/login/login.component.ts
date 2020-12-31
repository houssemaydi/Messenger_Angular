import { User } from './../model/user';
import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  u = new User();
  loggedin: boolean = false;
  constructor(
    private service: MessageService,
    private route: Router,
    private local: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.local.store('loggedin', this.loggedin);
    if( this.local.retrieve('loggedin') == false){
      this.route.navigate([""])
    }else{
      this.route.navigate(["MessageSent"])

    }
  }

  conect() {
    this.service.checklogin(this.u).subscribe(
      (data) => {
        console.log(data);
        if (data == null) {
          console.log('false');
          alert('verifier');
        } else {

          
          this.loggedin = true;
          this.local.store('loggedin', this.loggedin);


          this.u.nom = data.nom;
          this.u.id = data.id;
          console.log('true');
          console.log(this.u);
          this.local.store('user', this.u);
          this.route.navigateByUrl('Nav', { skipLocationChange: true }).then(() => {

            this.route.navigate(['MessageRecived']);

        }); 
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
