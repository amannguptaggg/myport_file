import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeTwoComponent } from './post-type-two.component';

describe('PostTypeTwoComponent', () => {
  let component: PostTypeTwoComponent;
  let fixture: ComponentFixture<PostTypeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
