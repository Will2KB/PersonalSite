import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCentersComponent } from './interest-centers.component';

describe('InterestCentersComponent', () => {
  let component: InterestCentersComponent;
  let fixture: ComponentFixture<InterestCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestCentersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
