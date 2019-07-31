import { TestBed } from '@angular/core/testing';

import { SongsManagerService } from './songs-manager.service';

describe('SongsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongsManagerService = TestBed.get(SongsManagerService);
    expect(service).toBeTruthy();
  });
});
