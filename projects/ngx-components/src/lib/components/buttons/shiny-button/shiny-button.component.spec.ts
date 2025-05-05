import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyButtonComponent } from './shiny-button.component';

describe('ShinyButtonComponent', () => {
  let component: ShinyButtonComponent;
  let fixture: ComponentFixture<ShinyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShinyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShinyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
