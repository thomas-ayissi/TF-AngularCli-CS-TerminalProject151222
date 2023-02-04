import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductInsideProductsAGLComponent } from './update-product-inside-products-agl.component';

describe('UpdateProductInsideProductsAGLComponent', () => {
  let component: UpdateProductInsideProductsAGLComponent;
  let fixture: ComponentFixture<UpdateProductInsideProductsAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductInsideProductsAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductInsideProductsAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
