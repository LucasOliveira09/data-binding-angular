import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagemDinamica } from './imagem-dinamica';

describe('ImagemDinamica', () => {
  let component: ImagemDinamica;
  let fixture: ComponentFixture<ImagemDinamica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagemDinamica],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagemDinamica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
