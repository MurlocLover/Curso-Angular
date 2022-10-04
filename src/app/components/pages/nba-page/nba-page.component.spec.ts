import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPageComponent } from './nba-page.component';

describe('NbaPageComponent', () => {
  let component: NbaPageComponent;
  let fixture: ComponentFixture<NbaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
