import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAGLComponent } from './items-agl.component';

describe('ItemsAGLComponent', () => {
  let component: ItemsAGLComponent;
  let fixture: ComponentFixture<ItemsAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
