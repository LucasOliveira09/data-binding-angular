import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotaoHabilitadoOuDesabilitado } from './botao-habilitado-ou-desabilitado';

describe('BotaoHabilitadoOuDesabilitado', () => {
  let component: BotaoHabilitadoOuDesabilitado;
  let fixture: ComponentFixture<BotaoHabilitadoOuDesabilitado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoHabilitadoOuDesabilitado],
    }).compileComponents();

    fixture = TestBed.createComponent(BotaoHabilitadoOuDesabilitado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
