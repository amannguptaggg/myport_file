import { Component, OnInit} from '@angular/core';
import { ProductViewService } from '../../product-view.service';
import { ActivatedRoute,Route } from '@angular/router';
import { Post } from '../../post';
import {Observable} from 'rxjs-compat';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/seo.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  allPosts:Observable<Post[]>;
  post:Observable<Post[]>;
  title:any;
  val:any[] = [];
  keywords:any;
  image:any;
  desc:any;


  constructor(private _getPostService:ProductViewService,private router:ActivatedRoute, private titleService:Title,
    private seo:SeoService) { }

  ngOnInit() { 

    $(document).ready(function(){
      $(".ngx-summernote-view img").addClass("img-responsive");
      $(".ngx-summernote-view img").css("object-fit","scale-down");
    });
 
     this.router.params.subscribe(params=>{
       
      const ptitle = params['title'];
       this.getPost(ptitle);
       this.post = this._getPostService.getPostData(ptitle);
       
       
       
        this.post.subscribe(val=>{
        this.keywords = val[0].keywords;
        this.image = val[0].blogImageLink;
        this.desc = val[0].description;
        this.titleService.setTitle(val[0].blogTitle);

        this.seo.generateTags({ 
          title: ptitle,
          description: this.desc,
          image: this.image,
          keywords: this.keywords
        });
      });
     });

    this.allPosts = this._getPostService.getAllBlogPost();
  }
  
  postLiked(){
     alert('Thank For Your Response');
  }

  postUnliked(){
    alert('Thank For Your Response');
  }

  getPost(ptitle:string){
    this.router.paramMap.subscribe((parms)=>{
        this.title = parms.get('title');
        window.scroll(0,0);
   });

   return this._getPostService.getPostData(this.title);
  }

}
