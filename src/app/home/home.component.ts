import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from 'jquery';
import Typed from 'typed.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  userContactForm:FormGroup;
  userName:string="";
  userEmail:string="";
  userPhone:string="";
  userMessage:string="";

  constructor(private _formBuilder:FormBuilder, private firestore:AngularFirestore){
    this.userContactForm = this._formBuilder.group({
      userName:['',[Validators.required]],
      userEmail:['',[Validators.required,Validators.email]],
      userPhone:['',[Validators.minLength(8),Validators.maxLength(14)]],
      userMessage:['',[Validators.maxLength(500)]]
    });

  }

  ngOnInit() {


    let options = {
      strings: [" Aman", "Web Developer", "Designer"],
      typeSpeed:130,
      backSpeed:100,
      backDelay: 1200,
      showCursor: true,
      smartBackspace: true,
      loop:true
    }
     
    let typed = new Typed(".typing-element",options);



    $(document).ready(function(){

      // Navigation Animation
      
      $(window).scroll(function(){
        
        var sticky = $('.navbar'),

        scroll= $(window).scrollTop();
        var wscroll = $(window).scrollTop(); 
        $('.paralaxx').css('background-position','center '+ (wscroll* -0.59 )+'px');

        if(scroll>=680) {
          sticky.addClass('fixed');
        }else{
          sticky.removeClass('fixed');
        }
      });

       //  About animation

    $('a[href="about"]').click(function(e){
      e.preventDefault();
      var target = $(this).attr('a[href="about"]');
     
      $('html, body').animate({
        scrollTop: ($(target).offset().top)
      },3000);

    });

  //  contact Animation

    $('a[href="contact"]').click(function(e){
      e.preventDefault();
      var target = $(this).attr('a[href="contact"]');
     
      $('html, body').animate({
        scrollTop: ($(target).offset().top)
      },3000);

    });




  })
}


postData(userContactForm:NgForm) {
  let data = userContactForm;
  this.firestore.collection('userContact').add(data);
  alert('THANK YOU'+'\n'+'Your response is saved !');
  this.resetFormData();
  
  }


resetFormData() {
  this.userContactForm.reset();
}

}
