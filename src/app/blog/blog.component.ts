import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductViewService } from '../product-view.service';
import { Observable } from 'rxjs-compat';
import { Post } from '../post';
import * as $ from 'jquery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  recentPost:Observable<Post[]>; 
  
  constructor(private router:Router,private _PostService:ProductViewService){}
  
  ngOnInit(){
    this.recentPost = this._PostService.getAllRecentBlogPost();   
  }

  ToggleNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}


}
