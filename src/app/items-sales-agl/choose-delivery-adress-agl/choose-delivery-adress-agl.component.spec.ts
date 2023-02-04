import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDeliveryAdressAGLComponent } from './choose-delivery-adress-agl.component';

describe('ChooseDeliveryAdressAGLComponent', () => {
  let component: ChooseDeliveryAdressAGLComponent;
  let fixture: ComponentFixture<ChooseDeliveryAdressAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseDeliveryAdressAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDeliveryAdressAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
