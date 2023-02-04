import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsImagesAGLComponent } from './items-images-agl.component';

describe('ItemsImagesAGLComponent', () => {
  let component: ItemsImagesAGLComponent;
  let fixture: ComponentFixture<ItemsImagesAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsImagesAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsImagesAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
