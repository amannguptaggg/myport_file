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
  
  config:any = {
    height: '500px',
  }

  constructor(private _formBuild:FormBuilder,private catService:BlogCategoryService,private fbS:AngularFirestore) {
    this.blogPost = this._formBuild.group({
      blogCategory:['',[Validators.required]],
      blogTitle:['',[Validators.required]],
      postURL:['',[Validators.required]],
      blogContent: ['',[Validators.required,Validators.minLength(900)]],
      blogAuthor: ['',[Validators.required]],
      blogImageLink:['',[Validators.required]],
      imgSrc:['',[Validators.required]],
      keywords:['',[Validators.required]],
      description:['',[Validators.required,Validators.maxLength(200)]],
      published: new Date(),  
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
     this.fbS.collection('blogPost').add(blogPost);
     alert('Blog Saved Successfully !');
     this.resetBlogPost();
  }

  resetBlogPost() {
    this.blogPost.reset();
  }



}
