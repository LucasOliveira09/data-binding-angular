import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaNomes } from './lista-nomes';

describe('ListaNomes', () => {
  let component: ListaNomes;
  let fixture: ComponentFixture<ListaNomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaNomes],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
