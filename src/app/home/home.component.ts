import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  userContactForm:FormGroup;
  userName:string="";
  userEmail:string="";
  userPhone:string="";
  userMessage:string="";

  constructor(private _formBuilder:FormBuilder, private firestore:AngularFirestore){
    this.userContactForm = this._formBuilder.group({
      userName:['',[Validators.required]],
      userEmail:['',[Validators.required,Validators.email]],
      userPhone:['',[Validators.minLength(8),Validators.maxLength(14)]],
      userMessage:['',[Validators.maxLength(500)]]
    });
  }



  ngOnInit() {
  }


postData(userContactForm:NgForm) {
  let data = userContactForm;
  this.firestore.collection('userContact').add(data);
  alert('THANK YOU'+'\n'+'Your response is saved !');
  this.resetFormData();
  
  }


resetFormData() {
  this.userContactForm.reset();
}

}
