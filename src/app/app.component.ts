import { Component} from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
 constructor() {}

 ngOnInit(){

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
