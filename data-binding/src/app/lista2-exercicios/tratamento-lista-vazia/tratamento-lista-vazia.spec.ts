import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TratamentoListaVazia } from './tratamento-lista-vazia';

describe('TratamentoListaVazia', () => {
  let component: TratamentoListaVazia;
  let fixture: ComponentFixture<TratamentoListaVazia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TratamentoListaVazia],
    }).compileComponents();

    fixture = TestBed.createComponent(TratamentoListaVazia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
