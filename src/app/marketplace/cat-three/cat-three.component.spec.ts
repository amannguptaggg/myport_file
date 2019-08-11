import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatThreeComponent } from './cat-three.component';

describe('CatThreeComponent', () => {
  let component: CatThreeComponent;
  let fixture: ComponentFixture<CatThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
