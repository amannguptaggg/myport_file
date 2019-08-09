import { Injectable, NgZone } from '@angular/core';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  userData:any;

  constructor(public afs:AngularFirestore,public afAuth:AngularFireAuth,public router:Router,public ngZone:NgZone) { 

    this.afAuth.authState.subscribe(user=>{
      if(user){
        this.userData = user;
        localStorage.setItem('user',JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
       localStorage.setItem('user',null);
       JSON.parse(localStorage.getItem('user'));
      }
    })
    
  }

  signIn(email,password){
      return this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then((result)=>{
        this.ngZone.run(()=>{
          this.router.navigate(['/admin']);
        });
      }).catch((error)=>{
        window.alert(error.message);
      })
  }

  get isLoggeedIn():boolean{
    const user  = JSON.parse(localStorage.getItem('user'));
    return (user !==null && user.emailVarified !== false)?true:false;
  }

  signOut(){
    return this.afAuth.auth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigate(['admin-login']);
    });

  }
}
