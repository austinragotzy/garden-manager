import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrEditComponent } from './usr-edit.component';

describe('UsrEditComponent', () => {
  let component: UsrEditComponent;
  let fixture: ComponentFixture<UsrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
