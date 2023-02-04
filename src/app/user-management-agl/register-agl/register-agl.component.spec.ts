import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAGLComponent } from './register-agl.component';

describe('RegisterAGLComponent', () => {
  let component: RegisterAGLComponent;
  let fixture: ComponentFixture<RegisterAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
