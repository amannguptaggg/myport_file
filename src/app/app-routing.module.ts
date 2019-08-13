import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
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
  path: 'marketplace',
  loadChildren: 'src/app/marketplace/marketplace.module#MarketplaceModule'
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
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
