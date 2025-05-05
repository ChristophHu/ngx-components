import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordeonGalleryComponent } from './accordeon-gallery.component';

describe('AccordeonGalleryComponent', () => {
  let component: AccordeonGalleryComponent;
  let fixture: ComponentFixture<AccordeonGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordeonGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordeonGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
