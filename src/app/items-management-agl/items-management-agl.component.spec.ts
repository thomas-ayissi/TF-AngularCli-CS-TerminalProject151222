import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsManagementAGLComponent } from './items-management-agl.component';

describe('ItemsManagementAGLComponent', () => {
  let component: ItemsManagementAGLComponent;
  let fixture: ComponentFixture<ItemsManagementAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsManagementAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsManagementAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
