import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordeonGallery2Component } from './accordeon-gallery2.component';

describe('AccordeonGallery2Component', () => {
  let component: AccordeonGallery2Component;
  let fixture: ComponentFixture<AccordeonGallery2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordeonGallery2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordeonGallery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
