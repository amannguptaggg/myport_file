import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm,Validators,FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {BlogCategoryService} from '../blog-category.service';
import {Observable} from 'rxjs-compat'
import { Post } from 'src/app/post';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-settings',
  templateUrl: './post-settings.component.html',
  styleUrls: ['./post-settings.component.css']
})
export class PostSettingsComponent implements OnInit {
  blogSetting:FormGroup;
  posts:Observable<Post[]>; 

  constructor(private blogBuilder:FormBuilder, private _fbS:AngularFirestore,
  private BlogService:BlogCategoryService,private router:Router) { 
    this.blogSetting = this.blogBuilder.group({
      blogCategory:['',[Validators.required]]
    });


  }

  ngOnInit() {
    this.posts = this.BlogService.getAllBlogPost();

  }

  settingPost(blogSetting:NgForm){
    this._fbS.collection('postSettings').add(blogSetting);
    this.settingPostReset();
    alert('Category Saved');
  }
  settingPostReset(){
    this.blogSetting.reset();
  }

  delete(id:string){
    var r = confirm("Confirm Delete. \nData will be permanentaly Deleted.");
    if(r == true){
    this.BlogService.deletePost(id);
  }
}

  updatePost(id:string) {
    this.router.navigate(["post-settings/update",id]);
  }

}
