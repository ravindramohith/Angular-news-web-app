import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthViewComponent } from './health-view.component';

describe('HealthViewComponent', () => {
  let component: HealthViewComponent;
  let fixture: ComponentFixture<HealthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
