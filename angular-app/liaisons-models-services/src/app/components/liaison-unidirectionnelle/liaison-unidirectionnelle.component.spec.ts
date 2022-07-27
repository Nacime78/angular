import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonUnidirectionnelleComponent } from './liaison-unidirectionnelle.component';

describe('LiaisonUnidirectionnelleComponent', () => {
  let component: LiaisonUnidirectionnelleComponent;
  let fixture: ComponentFixture<LiaisonUnidirectionnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiaisonUnidirectionnelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiaisonUnidirectionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
