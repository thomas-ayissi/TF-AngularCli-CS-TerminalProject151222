import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductInsideProductsAGLComponent } from './add-product-inside-products-agl.component';

describe('AddProductInsideProductsAGLComponent', () => {
  let component: AddProductInsideProductsAGLComponent;
  let fixture: ComponentFixture<AddProductInsideProductsAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductInsideProductsAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductInsideProductsAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
