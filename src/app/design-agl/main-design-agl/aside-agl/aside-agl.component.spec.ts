import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAGLComponent } from './aside-agl.component';

describe('AsideAGLComponent', () => {
  let component: AsideAGLComponent;
  let fixture: ComponentFixture<AsideAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
