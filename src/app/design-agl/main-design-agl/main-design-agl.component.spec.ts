import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDesignAGLComponent } from './main-design-agl.component';

describe('MainDesignAGLComponent', () => {
  let component: MainDesignAGLComponent;
  let fixture: ComponentFixture<MainDesignAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDesignAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDesignAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
