import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song, SongsApiService } from '../../core';
import { filter, map, take, first } from 'rxjs/operators';

@Injectable()
export class SongsManagerService {
  private _songs = new BehaviorSubject<Song[]>([]);
  songs = this._songs.asObservable();

  constructor(private api: SongsApiService) {
    this.loadSongs();
  }

  private async loadSongs() {
    const songs = await this.api.getSongs();
    this._songs.next(songs);
  }

  getSong(id: number): Promise<Song> {
    return this._songs
      .pipe(
        filter(o => o.length > 0),
        map(o => o.find(p => p.id === id)),
        take(1)
      )
      .toPromise();
  }
}
