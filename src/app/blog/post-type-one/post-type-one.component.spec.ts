import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeOneComponent } from './post-type-one.component';

describe('PostTypeOneComponent', () => {
  let component: PostTypeOneComponent;
  let fixture: ComponentFixture<PostTypeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
