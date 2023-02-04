import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuAGLComponent } from './footer-menu-agl.component';

describe('FooterMenuAGLComponent', () => {
  let component: FooterMenuAGLComponent;
  let fixture: ComponentFixture<FooterMenuAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMenuAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMenuAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
