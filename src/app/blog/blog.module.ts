import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import {BlogPostsComponent} from './blog-posts/blog-posts.component';
import { PostTypeOneComponent } from './post-type-one/post-type-one.component';
import { PostTypeTwoComponent } from './post-type-two/post-type-two.component';
import { PostTypeThreeComponent } from './post-type-three/post-type-three.component';
import { PostTypeFourComponent } from './post-type-four/post-type-four.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogHomeComponent,
    BlogPostsComponent,
    PostTypeOneComponent,
    PostTypeTwoComponent,
    PostTypeThreeComponent,
    PostTypeFourComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
     
  ],
  providers:[]
})

export class BlogModule { }

