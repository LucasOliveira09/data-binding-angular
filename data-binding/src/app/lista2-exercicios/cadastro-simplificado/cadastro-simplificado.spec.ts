import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroSimplificado } from './cadastro-simplificado';

describe('CadastroSimplificado', () => {
  let component: CadastroSimplificado;
  let fixture: ComponentFixture<CadastroSimplificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroSimplificado],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroSimplificado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
