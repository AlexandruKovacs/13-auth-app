import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradLayoutComponent } from './dashborad-layout.component';

describe('DashboradLayoutComponent', () => {
  let component: DashboradLayoutComponent;
  let fixture: ComponentFixture<DashboradLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboradLayoutComponent]
    });
    fixture = TestBed.createComponent(DashboradLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
