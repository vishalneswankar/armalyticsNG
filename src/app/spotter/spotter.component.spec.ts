import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotterComponent } from './spotter.component';

describe('SpotterComponent', () => {
  let component: SpotterComponent;
  let fixture: ComponentFixture<SpotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpotterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
