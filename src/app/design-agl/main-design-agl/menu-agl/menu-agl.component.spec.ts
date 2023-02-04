import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAGLComponent } from './menu-agl.component';

describe('MenuAGLComponent', () => {
  let component: MenuAGLComponent;
  let fixture: ComponentFixture<MenuAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
