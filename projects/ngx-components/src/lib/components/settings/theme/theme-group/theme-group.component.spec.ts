import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeGroupComponent } from './theme-group.component';

describe('ThemeGroupComponent', () => {
  let component: ThemeGroupComponent;
  let fixture: ComponentFixture<ThemeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
