import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorCurtidas } from './contador-curtidas';

describe('ContadorCurtidas', () => {
  let component: ContadorCurtidas;
  let fixture: ComponentFixture<ContadorCurtidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorCurtidas],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorCurtidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
