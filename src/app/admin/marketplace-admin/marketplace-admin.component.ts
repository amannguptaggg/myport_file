import { Component, OnInit } from '@angular/core';
import {FormBuilder,NgForm,FormGroup,Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-marketplace-admin',
  templateUrl: './marketplace-admin.component.html',
  styleUrls: ['./marketplace-admin.component.css']
})
export class MarketplaceAdminComponent implements OnInit {

  productForm:FormGroup;
  pro_img:string="";
  pro_name:string="";
  pro_description:string="";
  pro_price:number=0;
  pro_URL:string="";
  

  constructor(private _formBuild:FormBuilder,private _fbService:AngularFirestore) {
    this.productForm = this._formBuild.group({
      pro_img:['',[Validators.required]],
      pro_name:['',[Validators.required,Validators.minLength(25),Validators.maxLength(55)]],
      pro_description:['',[Validators.maxLength(500)]],
      pro_price:['',[Validators.required]],
      pro_URL:['',[Validators.required]]
    });
   }

  ngOnInit() {
  }

  productSubmit(productForm:NgForm){
    console.log(productForm);
    this._fbService.collection('amazon_products').add(productForm);
    alert('Product Added Successfully');
    this.resetProductForm();
  }

  resetProductForm(){
    this.productForm.reset();
  }
  
  
}
