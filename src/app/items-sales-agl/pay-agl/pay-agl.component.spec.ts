import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAGLComponent } from './pay-agl.component';

describe('PayAGLComponent', () => {
  let component: PayAGLComponent;
  let fixture: ComponentFixture<PayAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
