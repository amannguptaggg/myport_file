import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFourComponent } from './cat-four.component';

describe('CatFourComponent', () => {
  let component: CatFourComponent;
  let fixture: ComponentFixture<CatFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
