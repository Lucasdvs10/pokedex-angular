import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponentComponent } from './pokemon-card-component.component';

describe('PokemonCardComponentComponent', () => {
  let component: PokemonCardComponentComponent;
  let fixture: ComponentFixture<PokemonCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
