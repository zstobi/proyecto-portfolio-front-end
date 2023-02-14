import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjsComponent } from './prjs.component';

describe('PrjsComponent', () => {
  let component: PrjsComponent;
  let fixture: ComponentFixture<PrjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
