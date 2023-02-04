import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSalesAGLComponent } from './items-sales-agl.component';

describe('ItemsSalesAGLComponent', () => {
  let component: ItemsSalesAGLComponent;
  let fixture: ComponentFixture<ItemsSalesAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsSalesAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsSalesAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
