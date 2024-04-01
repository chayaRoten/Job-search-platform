import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsJobComponent } from './show-details-job.component';

describe('ShowDetailsJobComponent', () => {
  let component: ShowDetailsJobComponent;
  let fixture: ComponentFixture<ShowDetailsJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDetailsJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDetailsJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
