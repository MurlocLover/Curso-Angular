import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaFormComponent } from './nba-form.component';

describe('NbaFormComponent', () => {
  let component: NbaFormComponent;
  let fixture: ComponentFixture<NbaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
