import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';

@Component({
  selector: 'app-marketplce',
  templateUrl: './marketplce.component.html',
  styleUrls: ['./marketplce.component.css']
})
export class MarketplceComponent implements OnInit {
  allProduct:Array<any>;
  index:any;
  constructor(private pService:ProductViewService) { }

  ngOnInit() {
    this.pService.getProduct().subscribe(products=>{
      this.allProduct = products.map(e=>{
        return {
          pro_id:e.payload.doc.id,
          pro_url:e.payload.doc.data()['pro_URL'],
          pro_desc:e.payload.doc.data()['pro_description'],
          pro_img:e.payload.doc.data()['pro_img'],
          pro_name:e.payload.doc.data()['pro_name'],
          pro_price:e.payload.doc.data()['pro_price']
        }
      });
      console.log(this.allProduct);
      this.index = this.allProduct.length;
         

    })


  }

}
