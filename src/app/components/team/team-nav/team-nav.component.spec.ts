import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNavComponent } from './team-nav.component';

describe('TeamNavComponent', () => {
  let component: TeamNavComponent;
  let fixture: ComponentFixture<TeamNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamNavComponent]
    });
    fixture = TestBed.createComponent(TeamNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
