import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientFlowButtonComponent } from './gradient-flow-button.component';

describe('GradientFlowButtonComponent', () => {
  let component: GradientFlowButtonComponent;
  let fixture: ComponentFixture<GradientFlowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientFlowButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientFlowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
