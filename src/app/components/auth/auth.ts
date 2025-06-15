import { Component } from '@angular/core';
import { Authsefvice } from '../../authsefvice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [CommonModule,FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
mode: 'login'| 'register' = 'login';

email = '';
password = '';
errorMessage = '';

constructor(private authService : Authsefvice,private router:Router){}

toggleMode(){
  this.mode = this.mode === 'login' ? 'register' : 'login';
  this.errorMessage = ''
}

onSumbit(){
  if(this.mode === 'login'){
    this.authService.login(this.email,this.password)
    .then(() => {
      this.errorMessage = '';
      this.router.navigate(['/chat'])
    })
    .catch(err => this.errorMessage = err.message);
  } else {
    this.authService.register(this.email, this.password)
    .then(() => {
      this.errorMessage = '';
      this.router.navigate(['/chat'])
    })
    .catch(err => this.errorMessage = err.message)
  }
}
}
