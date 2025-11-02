import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesGroupComponent } from './times-group.component';

describe('TimesGroupComponent', () => {
  let component: TimesGroupComponent;
  let fixture: ComponentFixture<TimesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
