import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Song } from '../models/song';

@Injectable()
export class SongsApiService {
  private readonly baseApiUrl = `${process.env.WEB_API_BASE_URL}/api/song`;
  private readonly errorMessage = 'An error has occurred';

  constructor(private http: HttpClient) { }

  getSongs(): Promise<Song[]> {
    const url = this.apiUrl('');

    return this.http.get(url)
        .pipe(
            map(json => this.prepareSongs(json as Song[])),
        )
        .toPromise()
        .catch(error => Promise.reject(this.errorMessage));
}

  private prepareSongs(songs: Song[]) {
    return songs;
  }

  private apiUrl(action: string) {
    return `${this.baseApiUrl}/${action}`;
  }
}
