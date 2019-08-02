import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactAdminComponent } from './user-contact-admin.component';

describe('UserContactAdminComponent', () => {
  let component: UserContactAdminComponent;
  let fixture: ComponentFixture<UserContactAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
