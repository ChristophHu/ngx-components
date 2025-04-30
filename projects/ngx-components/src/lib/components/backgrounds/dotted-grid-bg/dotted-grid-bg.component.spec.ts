import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedGridBgComponent } from './dotted-grid-bg.component';

describe('DottedGridBgComponent', () => {
  let component: DottedGridBgComponent;
  let fixture: ComponentFixture<DottedGridBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DottedGridBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DottedGridBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
