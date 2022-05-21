import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceViewComponent } from './science-view.component';

describe('ScienceViewComponent', () => {
  let component: ScienceViewComponent;
  let fixture: ComponentFixture<ScienceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
