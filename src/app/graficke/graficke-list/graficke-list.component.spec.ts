import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafickeListComponent } from './graficke-list.component';

describe('GrafickeListComponent', () => {
  let component: GrafickeListComponent;
  let fixture: ComponentFixture<GrafickeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafickeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafickeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
