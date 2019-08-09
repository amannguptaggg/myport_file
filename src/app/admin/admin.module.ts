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
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { UpdateComponent } from './post-settings/update/update.component';

import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireAuthModule} from '@angular/fire/auth'; 

@NgModule({
  declarations: [BlogAdminComponent, MarketplaceAdminComponent, UserContactAdminComponent, HomeAdminComponent,AdminComponent, PostSettingsComponent, UpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers:[UserListService,BlogCategoryService]
})
export class AdminModule { }

