import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm,Validators,FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-post-settings',
  templateUrl: './post-settings.component.html',
  styleUrls: ['./post-settings.component.css']
})
export class PostSettingsComponent implements OnInit {
  blogSetting:FormGroup;

  constructor(private blogBuilder:FormBuilder, private _fbS:AngularFirestore) { 
    this.blogSetting = this.blogBuilder.group({
      blogCategory:['',[Validators.required]]
    });
  }

  ngOnInit() {
  }

  settingPost(blogSetting:NgForm){
    this._fbS.collection('postSettings').add(blogSetting);
    this.settingPostReset();
    alert('Category Saved');
  }

  settingPostReset(){
    this.blogSetting.reset();
  }

}
