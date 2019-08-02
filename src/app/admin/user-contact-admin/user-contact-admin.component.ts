import { Component, OnInit } from '@angular/core';
import {UserListService} from '../user-list.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-user-contact-admin',
  templateUrl: './user-contact-admin.component.html',
  styleUrls: ['./user-contact-admin.component.css']
})
export class UserContactAdminComponent implements OnInit {
   users:Array<any>;

  constructor(public userService:UserListService,private router:Router) { }

  ngOnInit() {

    this.userService.UserCollection().subscribe(result=>{
      this.users = result.map(e=>{
        return {
          id:e.payload.doc.id,
          name:e.payload.doc.data()['userName'],
          email:e.payload.doc.data()['userEmail'],
          phone:e.payload.doc.data()['userPhone'],
          message:e.payload.doc.data()['userMessage']
        }
      });

      console.log(this.users);
    })

    
 

  }

}
