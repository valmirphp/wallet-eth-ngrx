import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransactionComponent } from './form-transaction.component';

describe('FormTransactionComponent', () => {
  let component: FormTransactionComponent;
  let fixture: ComponentFixture<FormTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
