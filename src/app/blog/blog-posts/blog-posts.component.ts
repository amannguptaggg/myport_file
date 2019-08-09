import { Component, OnInit} from '@angular/core';
import { ProductViewService } from '../../product-view.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute } from '@angular/router';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Post } from '../../post';
import {Observable} from 'rxjs-compat'


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
  constructor(private _getPostService:ProductViewService,private router:ActivatedRoute) { }

  ngOnInit() {

    this.getPost();
    this.allPosts = this._getPostService.getAllBlogPost();
  }
  
  

  getPost(){
    this.router.paramMap.subscribe(parms=>{
        this.id=  parms.get('id');
   })

     return this._getPostService.getPostData(this.id).subscribe(data=> this.post=data)
     
  }

}
