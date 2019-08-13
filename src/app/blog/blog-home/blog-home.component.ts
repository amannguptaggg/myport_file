import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { Post } from 'src/app/post';
import { ProductViewService } from 'src/app/product-view.service';
import {PaginationService} from '../pagination.service';


@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  posts:Observable<Post[]>; 

  constructor(private _PostService:ProductViewService, public page:PaginationService) { }

  ngOnInit() {
    // this.posts = this._PostService.getAllBlogPost();
        // this._PostService.getAllBlogPost().subscribe(posts=>{
    //   this.blogs = posts.map(pst=>{
    //     return {
    //       id:pst.payload.doc.id,
    //       author:pst.payload.doc.data()['blogAuthor'],
    //       catgegory:pst.payload.doc.data()['blogCatgegory'],
    //       content:pst.payload.doc.data()['blogContent'],
    //       title:pst.payload.doc.data()['blogTitle']
    //     }
    //   })
    // }) 
    this.page.init('blogPost','published',{reverse:true,prepend:false})
  }
  scrollHandler(e){
    if(e === 'bottom'){
      this.page.more()
    }
  }

}

