import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDesignAGLComponent } from './footer-design-agl.component';

describe('FooterDesignAGLComponent', () => {
  let component: FooterDesignAGLComponent;
  let fixture: ComponentFixture<FooterDesignAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDesignAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDesignAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
