import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontGroupComponent } from './font-group.component';

describe('FontGroupComponent', () => {
  let component: FontGroupComponent;
  let fixture: ComponentFixture<FontGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
