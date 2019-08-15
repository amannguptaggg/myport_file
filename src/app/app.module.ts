import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductViewService } from './product-view.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminAuthService } from './admin-auth.service';
import {FormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ProductViewService,AdminAuthGuard,AdminAuthService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

