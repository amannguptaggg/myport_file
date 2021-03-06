import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,NgForm,Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from 'jquery';
import Typed from 'typed.js'
import { Observable } from 'rxjs-compat';
import { Post } from '../post';
import { ProductViewService } from '../product-view.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  recentPost:Observable<Post[]>;

  userContactForm:FormGroup;
  userName:string="";
  userEmail:string="";
  userPhone:string="";
  userMessage:string="";

  constructor(private _formBuilder:FormBuilder, private firestore:AngularFirestore,private _PostService:ProductViewService,
    private seo : SeoService ){

    this.userContactForm = this._formBuilder.group({
      userName:['',[Validators.required]],
      userEmail:['',[Validators.required,Validators.email]],
      userPhone:['',[Validators.minLength(8),Validators.maxLength(14)]],
      userMessage:['',[Validators.maxLength(500)]]
    });

  }

  ngOnInit() {

    this.seo.generateTags({
      title: 'Angular Web Developer || Portfolio, Blog, Marketplace',
      description: 'Full Stack Angular Web App Developer With Modern Look and feel,fully Responsive Webpages and Single Page SEO Expert,Google Analytics, Firebase and Many More...',
      image: 'https://aman-g.com/assets/icons/favicon.ico',
      keywords: 'aman-g.com, angular web developer , digital marketing , seo , angular firebase , advertise on google, web developer , portfolio',
    })

    let options = {
      strings: [" Aman", "Developer", "Designer"],
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
        if(scroll>=650) {
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
     
      $('html,body').animate({
        scrollTop:($(target).offset().top)
      },3000);

    });  

    $(document).ready(function () {
      $(document).click(
          function (event) {
              var target = $(event.target);
              var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
              if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
                  $("button.navbar-toggler").click();
              }
          }
      );
  })
  

var view = $("#tslshow");
var move = "120px";
var sliderLimit = -800;

$("#rightArrow").click(function(){

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 300})

});

$("#leftArrow").click(function(){

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 300});

});


  })



  this.recentPost = this._PostService.getAllRecentBlogPost();  
}


postData(userContactForm:NgForm) {
  let data = userContactForm;
  this.firestore.collection('userContact').add(data);
  alert('THANK YOU'+'\n'+'Your response is Sent!');
  this.resetFormData();
  
  }
resetFormData() {
  this.userContactForm.reset();
}

}
