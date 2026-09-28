import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocaoProdutos } from './promocao-produtos';

describe('PromocaoProdutos', () => {
  let component: PromocaoProdutos;
  let fixture: ComponentFixture<PromocaoProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromocaoProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(PromocaoProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
