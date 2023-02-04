import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPasswordAGLComponent } from './missing-password-agl.component';

describe('MissingPasswordAGLComponent', () => {
  let component: MissingPasswordAGLComponent;
  let fixture: ComponentFixture<MissingPasswordAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingPasswordAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingPasswordAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
