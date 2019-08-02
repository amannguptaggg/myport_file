import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplceComponent } from './marketplce.component';

describe('MarketplceComponent', () => {
  let component: MarketplceComponent;
  let fixture: ComponentFixture<MarketplceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
