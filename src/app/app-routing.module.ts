import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MarketplceComponent} from './marketplce/marketplce.component';
import {AboutComponent} from './about/about.component';
import { BlogPostsComponent } from './blog/blog-posts/blog-posts.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAuthGuard } from './admin-auth.guard';

const routes: Routes = [
{
  path: '',
  component:HomeComponent
},
{
  path:'blog',
  loadChildren:'src/app/blog/blog.module#BlogModule'
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
  path: 'admin',
  loadChildren:'src/app/admin/admin.module#AdminModule',
  canActivate:[AdminAuthGuard]
},
{
  path: 'admin-login',
  component:AdminLoginComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
