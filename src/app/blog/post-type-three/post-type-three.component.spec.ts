import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeThreeComponent } from './post-type-three.component';

describe('PostTypeThreeComponent', () => {
  let component: PostTypeThreeComponent;
  let fixture: ComponentFixture<PostTypeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
