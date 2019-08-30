import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';
import { Observable } from 'rxjs-compat';
import { Post } from '../post';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, NgForm , Validators} from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  recentPost:Observable<Post[]>;
  SubscribeEmail:FormGroup;
  constructor(private _PostService:ProductViewService ,private subForm:FormBuilder, private afSS:AngularFirestore){

    this.SubscribeEmail = this.subForm.group({
      SubscribeUs:['',[Validators.required,Validators.email]]
    });
  }
  
  ngOnInit(){
    this.recentPost = this._PostService.getAllRecentBlogPost();
   

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
  
  }

  EmailSubscribe(SubscribeEmail:NgForm){
     
    this.afSS.collection('SubscriptionsEmail').add(SubscribeEmail);
    alert('Your Email is saved !\nThank You For Subscription');
    this.resetSubscribeForm();
    }
   
    resetSubscribeForm(){
      this.SubscribeEmail.reset();
    }

 
}
