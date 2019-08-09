import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { PostFilterComponent } from './post-filter/post-filter.component';
import { PostTypeOneComponent } from './post-type-one/post-type-one.component';
import { PostTypeTwoComponent } from './post-type-two/post-type-two.component';
import { PostTypeThreeComponent } from './post-type-three/post-type-three.component';
import { PostTypeFourComponent } from './post-type-four/post-type-four.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children:[
      {
        path:'',
        component: BlogHomeComponent
      },
      {
        path: 'blog/post/:id',
        component: BlogPostsComponent
      },
      {
        path: 'new-tech',
        component:PostTypeOneComponent
      },
      {
        path: 'digital-marketing',
        component:PostTypeTwoComponent
      },
      {
        path: 'business',
        component:PostTypeThreeComponent
      },
      {
        path: 'how-to',
        component:PostTypeFourComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
