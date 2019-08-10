import {Component} from '@angular/core';
import {AdminAuthService} from '../admin-auth.service';

@Component({
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent{
   constructor(public authService:AdminAuthService){}
   
}
