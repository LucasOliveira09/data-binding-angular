import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassificacaoProdutos } from './classificacao-produtos';

describe('ClassificacaoProdutos', () => {
  let component: ClassificacaoProdutos;
  let fixture: ComponentFixture<ClassificacaoProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassificacaoProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassificacaoProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
