import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApresentacaoUser } from './apresentacao-user';

describe('ApresentacaoUser', () => {
  let component: ApresentacaoUser;
  let fixture: ComponentFixture<ApresentacaoUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApresentacaoUser],
    }).compileComponents();

    fixture = TestBed.createComponent(ApresentacaoUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
