import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafickaDetailComponent } from './graficka-detail.component';

describe('GrafickaDetailComponent', () => {
  let component: GrafickaDetailComponent;
  let fixture: ComponentFixture<GrafickaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafickaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafickaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
