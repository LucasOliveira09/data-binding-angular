import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculandoComInterpolation } from './calculando-com-interpolation';

describe('CalculandoComInterpolation', () => {
  let component: CalculandoComInterpolation;
  let fixture: ComponentFixture<CalculandoComInterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculandoComInterpolation],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculandoComInterpolation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
