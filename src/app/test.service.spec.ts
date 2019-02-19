import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('test add function exists',
  inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy(); 
  }));

  it('test add function works correctly',
  inject([TestService], (service: TestService) => {
    expect(service.add(1, 2)).toEqual(3); 
  }));

});
