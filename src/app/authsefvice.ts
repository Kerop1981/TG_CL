import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class Authsefvice {

   private auth = inject(Auth)
  
   register(email: string,password:string){
    return createUserWithEmailAndPassword(this.auth,email,password);
   }

   login(email: string,password:string){
    return createUserWithEmailAndPassword(this.auth,email,password);
   }

   logout(){
    return signOut(this.auth)
   }
}
