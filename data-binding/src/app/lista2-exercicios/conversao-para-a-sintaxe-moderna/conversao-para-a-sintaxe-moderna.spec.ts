import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversaoParaASintaxeModerna } from './conversao-para-a-sintaxe-moderna';

describe('ConversaoParaASintaxeModerna', () => {
  let component: ConversaoParaASintaxeModerna;
  let fixture: ComponentFixture<ConversaoParaASintaxeModerna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversaoParaASintaxeModerna],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversaoParaASintaxeModerna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
