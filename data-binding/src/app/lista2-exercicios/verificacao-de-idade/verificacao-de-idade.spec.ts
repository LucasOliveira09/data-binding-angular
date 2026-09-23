import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificacaoDeIdade } from './verificacao-de-idade';

describe('VerificacaoDeIdade', () => {
  let component: VerificacaoDeIdade;
  let fixture: ComponentFixture<VerificacaoDeIdade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificacaoDeIdade],
    }).compileComponents();

    fixture = TestBed.createComponent(VerificacaoDeIdade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
