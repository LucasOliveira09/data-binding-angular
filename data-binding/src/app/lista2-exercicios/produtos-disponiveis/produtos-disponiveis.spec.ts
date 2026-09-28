import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosDisponiveis } from './produtos-disponiveis';

describe('ProdutosDisponiveis', () => {
  let component: ProdutosDisponiveis;
  let fixture: ComponentFixture<ProdutosDisponiveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutosDisponiveis],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosDisponiveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
