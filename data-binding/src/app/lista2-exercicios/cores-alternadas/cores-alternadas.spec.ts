import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoresAlternadas } from './cores-alternadas';

describe('CoresAlternadas', () => {
  let component: CoresAlternadas;
  let fixture: ComponentFixture<CoresAlternadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoresAlternadas],
    }).compileComponents();

    fixture = TestBed.createComponent(CoresAlternadas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
