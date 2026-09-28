import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfaceProdutos } from './interface-produtos';

describe('InterfaceProdutos', () => {
  let component: InterfaceProdutos;
  let fixture: ComponentFixture<InterfaceProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterfaceProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(InterfaceProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
