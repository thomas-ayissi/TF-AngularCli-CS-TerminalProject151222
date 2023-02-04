import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInsideCartAGLComponent } from './delete-inside-cart-agl.component';

describe('DeleteInsideCartAGLComponent', () => {
  let component: DeleteInsideCartAGLComponent;
  let fixture: ComponentFixture<DeleteInsideCartAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInsideCartAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteInsideCartAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
