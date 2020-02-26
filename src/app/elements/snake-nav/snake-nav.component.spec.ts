import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeNavComponent } from './snake-nav.component';

describe('SnakeNavComponent', () => {
  let component: SnakeNavComponent;
  let fixture: ComponentFixture<SnakeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
