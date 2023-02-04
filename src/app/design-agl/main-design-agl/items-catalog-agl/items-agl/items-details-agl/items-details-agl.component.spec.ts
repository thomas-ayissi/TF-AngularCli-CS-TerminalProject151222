import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDetailsAGLComponent } from './items-details-agl.component';

describe('ItemsDetailsAGLComponent', () => {
  let component: ItemsDetailsAGLComponent;
  let fixture: ComponentFixture<ItemsDetailsAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsDetailsAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDetailsAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
