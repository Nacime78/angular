import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonBidirectionnelleComponent } from './liaison-bidirectionnelle.component';

describe('LiaisonBidirectionnelleComponent', () => {
  let component: LiaisonBidirectionnelleComponent;
  let fixture: ComponentFixture<LiaisonBidirectionnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiaisonBidirectionnelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiaisonBidirectionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
