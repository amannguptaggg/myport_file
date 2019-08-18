import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';
import { Observable } from 'rxjs-compat';
import { Post } from '../post';
import * as $ from 'jquery';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  recentPost:Observable<Post[]>; 
  
  constructor(private _PostService:ProductViewService , private seo:SeoService){}
  
  ngOnInit(){

    this.seo.generateTags({
      title: 'AmannG.com/blog',
      description: 'Articles you will get related to Digital Marketing , Business , New Tech , how to ',
      image: 'https://my-portfolio-4ff3c.web.app/assets/icons/favicon.ico',
    })

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


}
