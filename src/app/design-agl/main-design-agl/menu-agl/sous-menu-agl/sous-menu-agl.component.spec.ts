import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousMenuAGLComponent } from './sous-menu-agl.component';

describe('SousMenuAGLComponent', () => {
  let component: SousMenuAGLComponent;
  let fixture: ComponentFixture<SousMenuAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousMenuAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SousMenuAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
