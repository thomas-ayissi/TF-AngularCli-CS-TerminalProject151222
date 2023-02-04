import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartAGLComponent } from './add-to-cart-agl.component';

describe('AddToCartAGLComponent', () => {
  let component: AddToCartAGLComponent;
  let fixture: ComponentFixture<AddToCartAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
