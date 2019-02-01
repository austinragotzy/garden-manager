import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAddComponent } from './usr-add.component';

describe('UsrAddComponent', () => {
  let component: UsrAddComponent;
  let fixture: ComponentFixture<UsrAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
