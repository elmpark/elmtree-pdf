import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmtreePdfComponent } from './elmtree-pdf.component';

describe('ElmtreePdfComponent', () => {
  let component: ElmtreePdfComponent;
  let fixture: ComponentFixture<ElmtreePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElmtreePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmtreePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
