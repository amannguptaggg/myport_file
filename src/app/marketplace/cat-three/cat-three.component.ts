import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cat-three',
  templateUrl: './cat-three.component.html',
  styleUrls: ['../market-home/market-home.component.css']
})
export class CatThreeComponent implements OnInit {
  public itemsCat:any;
  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('amazon_products',ref=>ref.where("ItemCategory",'==','health-care')).snapshotChanges().subscribe(
      val=> {
        this.itemsCat= val.map(pst=>{ 
          return {
            id:pst.payload.doc.id,
            ItemCategory:pst.payload.doc.data()['ItemCategory'],
            pro_URL:pst.payload.doc.data()['pro_URL'],
            pro_img:pst.payload.doc.data()['pro_img'],
            pro_name:pst.payload.doc.data()['pro_name'],
            pro_price:pst.payload.doc.data()['pro_price'],
          }
        })
      }
    )
  }

}
