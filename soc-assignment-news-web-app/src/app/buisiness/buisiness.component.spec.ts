import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisinessComponent } from './buisiness.component';

describe('BuisinessComponent', () => {
  let component: BuisinessComponent;
  let fixture: ComponentFixture<BuisinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuisinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
