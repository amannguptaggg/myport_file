import { Component,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  
 constructor() {}

 ngOnInit(){
  
  $(document).ready(function(){

    // Navigation Animation
    
    $(window).scroll(function(){

      var sticky = $('.navbar'),
      scroll= $(window).scrollTop();

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

 }


}
