import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TaskStateService } from './task-state.service';

describe('TaskStateService', () => {
  let service: TaskStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TaskStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
