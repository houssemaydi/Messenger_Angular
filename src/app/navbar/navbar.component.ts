import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(    private local: LocalStorageService,private route: Router
    ) { }

    logged:boolean=false;
  ngOnInit(): void {
   this.logged= this.local.retrieve("loggedin");
   
  }

  logout(){
    this.local.store("loggedin",false);
    this.route.navigate(["/"]);
    window.location.reload();

  }
}
