import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechViewComponent } from './tech-view.component';

describe('TechViewComponent', () => {
  let component: TechViewComponent;
  let fixture: ComponentFixture<TechViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
