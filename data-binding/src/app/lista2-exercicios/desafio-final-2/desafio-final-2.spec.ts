import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesafioFinal2 } from './desafio-final-2';

describe('DesafioFinal2', () => {
  let component: DesafioFinal2;
  let fixture: ComponentFixture<DesafioFinal2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioFinal2],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioFinal2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
