import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploPipePuroImpuroComponent } from './exemplo-pipe-puro-impuro.component';

describe('ExemploPipePuroImpuroComponent', () => {
  let component: ExemploPipePuroImpuroComponent;
  let fixture: ComponentFixture<ExemploPipePuroImpuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploPipePuroImpuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploPipePuroImpuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
