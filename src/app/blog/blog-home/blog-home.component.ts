import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { Post } from 'src/app/post';
import { ProductViewService } from 'src/app/product-view.service';
import {PaginationService} from '../pagination.service';
import { SeoService } from 'src/app/seo.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  posts:Observable<Post[]>; 
  title = 'Blog | Read Awesome Articles';
  constructor(private _PostService:ProductViewService, public page:PaginationService ,public seo:SeoService, private titleservice:Title) { }

  ngOnInit() {

    this.titleservice.setTitle(this.title);

    this.seo.generateTags({ 
      title: this.title,
      description: 'Read Blog Articles On New Tech, Digital Marketing, Business, How To',
      image: 'https://my-portfolio-4ff3c.web.app/assets/icons/favicon.ico',
    })

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

