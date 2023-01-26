import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonMenuComponent } from './bouton-menu.component';

describe('LibrairieComponment', () => {
  let component: LibrairieComponment;
  let fixture: ComponentFixture<LibrairieComponment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrairieComponment ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrairieComponment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
