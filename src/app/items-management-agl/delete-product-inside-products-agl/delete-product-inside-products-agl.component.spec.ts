import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductInsideProductsAGLComponent } from './delete-product-inside-products-agl.component';

describe('DeleteProductInsideProductsAGLComponent', () => {
  let component: DeleteProductInsideProductsAGLComponent;
  let fixture: ComponentFixture<DeleteProductInsideProductsAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductInsideProductsAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductInsideProductsAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
