import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAGLComponent } from './user-management-agl.component';

describe('UserManagementAGLComponent', () => {
  let component: UserManagementAGLComponent;
  let fixture: ComponentFixture<UserManagementAGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementAGLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementAGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
