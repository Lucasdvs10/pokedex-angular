import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListComponentComponent } from './cards-list-component.component';

describe('CardsListComponentComponent', () => {
  let component: CardsListComponentComponent;
  let fixture: ComponentFixture<CardsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
