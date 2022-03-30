import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerPromptComponent } from './winner-prompt.component';

describe('WinnerPromptComponent', () => {
  let component: WinnerPromptComponent;
  let fixture: ComponentFixture<WinnerPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
