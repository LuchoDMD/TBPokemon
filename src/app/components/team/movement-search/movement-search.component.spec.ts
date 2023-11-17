import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementSearchComponent } from './movement-search.component';

describe('MovementSearchComponent', () => {
  let component: MovementSearchComponent;
  let fixture: ComponentFixture<MovementSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovementSearchComponent]
    });
    fixture = TestBed.createComponent(MovementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
