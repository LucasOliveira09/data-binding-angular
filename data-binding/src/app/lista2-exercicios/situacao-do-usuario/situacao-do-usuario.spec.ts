import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacaoDoUsuario } from './situacao-do-usuario';

describe('SituacaoDoUsuario', () => {
  let component: SituacaoDoUsuario;
  let fixture: ComponentFixture<SituacaoDoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SituacaoDoUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(SituacaoDoUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
