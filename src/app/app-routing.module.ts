import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { MessagesRecivedComponent } from './messages-recived/messages-recived.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesssagesSentComponent } from './messsages-sent/messsages-sent.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"CreateMessage",component:SendMessageComponent
  },
  {
    path:"MessageRecived",component:MessagesRecivedComponent
  },
  {
    path:"MessageSent",component:MesssagesSentComponent
  },
  {
    path:"Message",component:MessageComponent
  },{
    path:"Nav",component:NavbarComponent
  },
  {
    path:"Signup",component:SignupComponent
  },
  {
    path:"",component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
