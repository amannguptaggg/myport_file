import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {MarketplceComponent} from './marketplce/marketplce.component';
import {AboutComponent} from './about/about.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

const routes: Routes = [
{
  path: '',
  component:HomeComponent
},

{
 path: 'blog',
 component:BlogComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'marketplace',
  component: MarketplceComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'blog/post',
  component: BlogPostsComponent
},
{
  path: 'admin',
  loadChildren:'src/app/admin/admin.module#AdminModule'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
