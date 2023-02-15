import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLogoutComponent } from './nav-bar-logout.component';

describe('NavBarLogoutComponent', () => {
  let component: NavBarLogoutComponent;
  let fixture: ComponentFixture<NavBarLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
