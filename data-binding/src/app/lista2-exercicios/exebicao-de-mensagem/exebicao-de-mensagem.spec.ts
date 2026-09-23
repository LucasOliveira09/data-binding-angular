import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExebicaoDeMensagem } from './exebicao-de-mensagem';

describe('ExebicaoDeMensagem', () => {
  let component: ExebicaoDeMensagem;
  let fixture: ComponentFixture<ExebicaoDeMensagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExebicaoDeMensagem],
    }).compileComponents();

    fixture = TestBed.createComponent(ExebicaoDeMensagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
