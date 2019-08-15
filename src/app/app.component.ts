import { Component} from '@angular/core';
import * as $ from 'jquery';
import {SwUpdate} from '@angular/service-worker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
 constructor(public swUpdate:SwUpdate) {}

 ngOnInit(){

  this.swUpdate.available.subscribe(event=>{
    console.log('A New Version Is Avilable');
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

 }


}
