import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierComposantBasiqueComponent } from './premier-composant-basique.component';

describe('PremierComposantBasiqueComponent', () => {
  let component: PremierComposantBasiqueComponent;
  let fixture: ComponentFixture<PremierComposantBasiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierComposantBasiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremierComposantBasiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
