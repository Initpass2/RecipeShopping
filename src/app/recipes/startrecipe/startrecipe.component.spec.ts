import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartrecipeComponent } from './startrecipe.component';

describe('StartrecipeComponent', () => {
  let component: StartrecipeComponent;
  let fixture: ComponentFixture<StartrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartrecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
