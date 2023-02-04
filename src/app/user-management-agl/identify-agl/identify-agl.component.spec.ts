import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyAGLComponent } from './identify-agl.component';

describe('IdentifyAGLComponent', () => {
  let component: IdentifyAGLComponent;
  let fixture: ComponentFixture<IdentifyAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentifyAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
