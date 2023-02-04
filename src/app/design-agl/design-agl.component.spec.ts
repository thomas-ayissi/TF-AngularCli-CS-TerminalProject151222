import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAGLComponent } from './design-agl.component';

describe('DesignAGLComponent', () => {
  let component: DesignAGLComponent;
  let fixture: ComponentFixture<DesignAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
