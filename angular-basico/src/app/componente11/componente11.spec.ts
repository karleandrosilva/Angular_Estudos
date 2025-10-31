import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente11 } from './componente11';

describe('Componente11', () => {
  let component: Componente11;
  let fixture: ComponentFixture<Componente11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
