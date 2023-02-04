import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCatalogAGLComponent } from './items-catalog-agl.component';

describe('ItemsCatalogAGLComponent', () => {
  let component: ItemsCatalogAGLComponent;
  let fixture: ComponentFixture<ItemsCatalogAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCatalogAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsCatalogAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
