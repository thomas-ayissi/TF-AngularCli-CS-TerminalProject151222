import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentMethodAGLComponent } from './add-payment-method-agl.component';

describe('AddPaymentMethodAGLComponent', () => {
  let component: AddPaymentMethodAGLComponent;
  let fixture: ComponentFixture<AddPaymentMethodAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentMethodAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentMethodAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
