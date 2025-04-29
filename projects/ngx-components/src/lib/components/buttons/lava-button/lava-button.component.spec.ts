import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaButtonComponent } from './lava-button.component';

describe('LavaButtonComponent', () => {
  let component: LavaButtonComponent;
  let fixture: ComponentFixture<LavaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LavaButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
