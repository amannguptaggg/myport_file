import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { MarketplaceAdminComponent } from './marketplace-admin/marketplace-admin.component';
import { UserContactAdminComponent } from './user-contact-admin/user-contact-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminComponent } from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserListService } from './user-list.service';
import { PostSettingsComponent } from './post-settings/post-settings.component';
import { BlogCategoryService } from './blog-category.service';
import { UpdateComponent } from './update/update.component';
import {NgxSummernoteModule} from 'ngx-summernote'

import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireAuthModule} from '@angular/fire/auth'; 
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [BlogAdminComponent, MarketplaceAdminComponent, UserContactAdminComponent, HomeAdminComponent,AdminComponent, PostSettingsComponent, UpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxSummernoteModule,
    HttpClientModule
  ],
  providers:[UserListService,BlogCategoryService]
})
export class AdminModule { }

