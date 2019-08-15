import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { FormGroup,FormBuilder,Validators,NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AngularFirestore} from '@angular/fire/firestore'
import { Post } from 'src/app/post';
import { BlogCategoryService } from '../blog-category.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  BlogPost:Post;
  blogUpdatePost:FormGroup;
  AllCategory:Array<any>;
  public Editor = ClassicEditor;

  constructor(private _formBuildupdate:FormBuilder,private route:ActivatedRoute,private BlogService:BlogCategoryService,private afs:AngularFirestore,private router:Router) {
    this.blogUpdatePost = this._formBuildupdate.group({

      blogCategory:[null,[Validators.required]],
      blogTitle: ['',[Validators.required]],
      blogContent: ['',[Validators.required]],
      blogAuthor: ['',[Validators.required]],
      blogImageLink:['',[Validators.required]],
      published: new Date(),
    
    });
  }

  ngOnInit() {

    this.BlogService.blogCategories().subscribe(cat=>{
      this.AllCategory = cat.map(c=>{
        return {
          blogCategory:c.payload.doc.data()['blogCategory']
        }
      });
    })
    this.getPost()
  }

 resetBlogPost() {
   this.blogUpdatePost.reset();
 }

 getPost(){
  const id= this.route.snapshot.paramMap.get('id');
    return this.BlogService.getPostData(id).subscribe(data=> this.BlogPost=data);
 }

  updatePost(blogUpdatePost:NgForm){
    const id = this.route.snapshot.paramMap.get('id');

    this.BlogService.updatePost(id,blogUpdatePost);
    alert('Post Updated Successfully');
  }

}
