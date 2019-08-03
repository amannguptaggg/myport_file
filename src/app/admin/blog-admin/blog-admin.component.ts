import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms'
import { BlogCategoryService } from '../blog-category.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent implements OnInit {

  blogPost:FormGroup;
  AllCat:Array<any>;

  constructor(private _formBuild:FormBuilder,private catService:BlogCategoryService,private fbS:AngularFirestore) {
    this.blogPost = this._formBuild.group({
      blogCatgegory:[null,[Validators.required]],
      blogTitle:['',[Validators.required]],
      blogContent: ['',[Validators.required]],
      blogAuthor: ['',[Validators.required]],
      blogImageLink:['',[Validators.required]],
    });
   }

  ngOnInit() {
    this.catService.blogCategories().subscribe(cat=>{
      this.AllCat = cat.map(c=>{
        return {
        category:c.payload.doc.data()['blogCategory']
        }
      });
    }) 
  
  }

  submitBlog(blogPost:NgForm) {
     console.log(blogPost);
     this.fbS.collection('blogPost').add(blogPost);
     this.resetBlogPost();
  }

  resetBlogPost() {
    this.blogPost.reset();
  }

}
