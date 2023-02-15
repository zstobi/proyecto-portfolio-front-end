import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionModeComponent } from './edition-mode.component';

describe('EditionModeComponent', () => {
  let component: EditionModeComponent;
  let fixture: ComponentFixture<EditionModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
