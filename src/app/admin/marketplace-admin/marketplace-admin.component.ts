import { Component, OnInit } from '@angular/core';
import {FormBuilder,NgForm,FormGroup,Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { BlogCategoryService } from '../blog-category.service';

@Component({
  selector: 'app-marketplace-admin',
  templateUrl: './marketplace-admin.component.html',
  styleUrls: ['./marketplace-admin.component.css']
})
export class MarketplaceAdminComponent implements OnInit {
  ItemCat:Array<any>;

  productForm:FormGroup;
  pro_img:string="";
  pro_name:string="";
  pro_description:string="";
  pro_price:number=0;
  pro_URL:string="";
  img_alt:string="";

 
  constructor(private _formBuild:FormBuilder,private _fbService:AngularFirestore,private ItemService:BlogCategoryService) {
    this.productForm = this._formBuild.group({
      pro_img:['',[Validators.required]],
      pro_name:['',[Validators.required,Validators.minLength(25),Validators.maxLength(55)]],
      pro_description:['',[Validators.maxLength(500)]],
      pro_price:['',[Validators.required]],
      pro_URL:['',[Validators.required]],
      ItemCategory:['',[Validators.required]],
      img_alt:['',[Validators.required]]
    });
   }

  ngOnInit() {
    this.ItemService.itemCategories().subscribe(cat=>{
      this.ItemCat = cat.map(c=>{
        return {
          itemCategory:c.payload.doc.data()['itemCategory']
        }
      });
    }) 
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
