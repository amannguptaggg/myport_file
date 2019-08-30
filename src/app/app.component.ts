import { Component} from '@angular/core';
import * as $ from 'jquery';
import {SwUpdate} from '@angular/service-worker';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';


declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
 
  SubscribeEmails:FormGroup;
  
  
 constructor(public swUpdate:SwUpdate , private router:Router ,private cookieService:CookieService, private _form:FormBuilder
  ,private afS:AngularFirestore) {
  
  this.SubscribeEmails = this._form.group({
    SubscribeEmail:[null,[Validators.required,Validators.email]]
  });
  
  
  const navEndEvents =  router.events.pipe(
     filter(event => event instanceof NavigationEnd),
   );
   navEndEvents.subscribe((event: NavigationEnd)=>{
    gtag('config', 'G-X4JCS6XT2Z',{
      'page_path': event.urlAfterRedirects
    });
   })
 }

 ngOnInit(){


  this.swUpdate.available.subscribe(event=>{

  });
  this.swUpdate.checkForUpdate();

   $(document).ready(function(){
    // Scroll Top Btn
    $(window).scroll(function(){
     var scrollVal = $(window).scrollTop();
     var targetbtn = $('#myBtn');
        if( scrollVal >700) {
          targetbtn.css('display','block');
        }else{
          targetbtn.css('display','none');
        }
    });

    
    $('#myBtn').click(function(e){
      e.preventDefault();
       $('html,body').animate({scrollTop:0},'700');
     });


  });

  // Email
   
  const user:boolean =  this.cookieService.check('userVisit');

  $(document).ready(function(){	
    $('.close').click(function(){
        $('#popup-container').fadeOut();
        $('#active-popup').fadeOut();
        $('#list-builder').fadeOut();
    });

  if(!user){
    $('#list-builder').delay(30000).fadeIn('slow',()=>{
        $('list-builder').css('display','block');
        $('#popup-container').css('display','block');
    });
  }

  $('.btnn-primary').click(function(){
    $('#popup-container').fadeOut();
    $('#active-popup').fadeOut();
    $('#list-builder').fadeOut();
     
  });
  

  });

 }

 setCookie(){
   this.cookieService.set('userVisit','setUser',1);
 }

 emailSaved(){
  this.cookieService.set('userVisit','setUser',365);
}


 userEmailSubscribe(SubscribeEmails:NgForm){
  let Uemail = SubscribeEmails;
 this.afS.collection('SubscriptionsEmail').add(Uemail);
 this.resetSubscribeForm();
 }

 resetSubscribeForm(){
   this.SubscribeEmails.reset();
 }


}
