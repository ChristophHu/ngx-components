import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientBorderButtonComponent } from './gradient-border-button.component';

describe('GradientBorderButtonComponent', () => {
  let component: GradientBorderButtonComponent;
  let fixture: ComponentFixture<GradientBorderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientBorderButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientBorderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
