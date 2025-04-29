import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredHeadlineComponent } from './centered-headline.component';

describe('CenteredHeadlineComponent', () => {
  let component: CenteredHeadlineComponent;
  let fixture: ComponentFixture<CenteredHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredHeadlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
