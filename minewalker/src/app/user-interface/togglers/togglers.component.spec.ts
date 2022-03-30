import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglersComponent } from './togglers.component';

describe('TogglersComponent', () => {
  let component: TogglersComponent;
  let fixture: ComponentFixture<TogglersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
