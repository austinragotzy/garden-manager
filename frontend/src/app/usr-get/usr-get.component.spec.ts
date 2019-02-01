import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrGetComponent } from './usr-get.component';

describe('UsrGetComponent', () => {
  let component: UsrGetComponent;
  let fixture: ComponentFixture<UsrGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
