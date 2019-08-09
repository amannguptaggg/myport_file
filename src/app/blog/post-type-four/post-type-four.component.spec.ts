import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeFourComponent } from './post-type-four.component';

describe('PostTypeFourComponent', () => {
  let component: PostTypeFourComponent;
  let fixture: ComponentFixture<PostTypeFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
