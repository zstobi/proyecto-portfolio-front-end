import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtmComponent } from './abtm.component';

describe('AbtmComponent', () => {
  let component: AbtmComponent;
  let fixture: ComponentFixture<AbtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbtmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
