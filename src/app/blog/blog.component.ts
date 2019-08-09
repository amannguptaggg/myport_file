import { Component, OnInit } from '@angular/core';
import { PostTypeService } from './post-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  ngOnInit(){

  }
  constructor(private _postService:PostTypeService,private router:Router){}

 
  sendPostType(msg:string){
    localStorage.setItem('postType',msg);
    this.router.navigate(['blog/post-filter']);
  }

}
