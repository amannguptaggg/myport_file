import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MarketplaceAdminComponent } from './marketplace-admin/marketplace-admin.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { UserContactAdminComponent } from './user-contact-admin/user-contact-admin.component';
import { PostSettingsComponent } from './post-settings/post-settings.component';
import { UpdateComponent } from './post-settings/update/update.component';
import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from '../admin-auth.guard';


const routes: Routes = [
  {
    path: '',
    component:AdminComponent,
    children:[
      {
        path:'',
        component:HomeAdminComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path:'product-admin',
        component:MarketplaceAdminComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path:'blog-admin',
        component:BlogAdminComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path: 'user-contact',
        component: UserContactAdminComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path:'post-settings',
        component: PostSettingsComponent,
        canActivate:[AdminAuthGuard]
      },
      {
        path: 'post-settings/update/:id',
        component: UpdateComponent,
        canActivate:[AdminAuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

