import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminComponent } from './admin.component';
import { MarketplaceAdminComponent } from './marketplace-admin/marketplace-admin.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { UserContactAdminComponent } from './user-contact-admin/user-contact-admin.component';
import { PostSettingsComponent } from './post-settings/post-settings.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path:'homeAdmin',
        component:HomeAdminComponent,
      },
      {
        path:'product-admin',
        component:MarketplaceAdminComponent
      },
      {
        path:'blog-admin',
        component:BlogAdminComponent
      },
      {
        path: 'user-contact',
        component: UserContactAdminComponent
      },
      {
        path:'post-settings',
        component: PostSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
