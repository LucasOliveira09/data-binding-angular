import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SituacaoDeEstoque } from './situacao-de-estoque';

describe('SituacaoDeEstoque', () => {
  let component: SituacaoDeEstoque;
  let fixture: ComponentFixture<SituacaoDeEstoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SituacaoDeEstoque],
    }).compileComponents();

    fixture = TestBed.createComponent(SituacaoDeEstoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
