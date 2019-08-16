import { Component, OnInit} from '@angular/core';
import { ProductViewService } from '../../product-view.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute,Route } from '@angular/router';
import { Post } from '../../post';
import {Observable, Timestamp} from 'rxjs-compat';


@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  public Editor = ClassicEditor;
  allPosts:Observable<Post[]>
  post:Post;
  id:any;
  publishedD:any;
  constructor(private _getPostService:ProductViewService,private router:ActivatedRoute) { }

  ngOnInit() {
     this.router.params.subscribe(params=>{
       const pId = params['id']
       this.getPost(pId);
     })
    this.allPosts = this._getPostService.getAllBlogPost();
  }
  
  

  getPost(pId:string){
    this.router.paramMap.subscribe((parms)=>{
        this.id= parms.get('id');
        window.scroll(0,0);
   });

     return this._getPostService.getPostData(this.id).subscribe(data=> this.post=data);
     
  }

}
