import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveSearchComponent } from './move-search.component';

describe('MoveSearchComponent', () => {
  let component: MoveSearchComponent;
  let fixture: ComponentFixture<MoveSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoveSearchComponent]
    });
    fixture = TestBed.createComponent(MoveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
