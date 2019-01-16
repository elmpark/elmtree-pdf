import { TestBed } from '@angular/core/testing';

import { ElmtreePdfService } from './elmtree-pdf.service';

describe('ElmtreePdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElmtreePdfService = TestBed.get(ElmtreePdfService);
    expect(service).toBeTruthy();
  });
});
