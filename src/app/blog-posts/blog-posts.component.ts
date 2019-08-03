import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  allPosts:Array<any>;

  constructor(private _getPostService:ProductViewService,) { }

  ngOnInit() {
    this._getPostService.getBlogPost().subscribe(posts=>{
      this.allPosts = posts.map(pst=>{
        return {
          author:pst.payload.doc.data()['blogAuthor'],
          catgegory:pst.payload.doc.data()['blogCatgegory'],
          content:pst.payload.doc.data()['blogContent'],
          title:pst.payload.doc.data()['blogTitle']
        }
      })
      console.log(this.allPosts);
    })

  }

}
