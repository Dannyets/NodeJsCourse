import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Song } from '../models/song';
import { Observable } from 'rxjs';

@Injectable()
export class SongsApiService {
  private readonly baseApiUrl = './assets/';
  private readonly errorMessage = 'An error has occurred';

  constructor(private http: HttpClient) { }

  // getSongs(): Observable<Song[]> {
  //   return this.http.get(this.apiUrl('projects.json'))
  //     .pipe(
  //       map(json => this.prepareSongs(json as Song[])),
  //       catchError(error => Observable.throw(this.errorMessage))
  //     );
  // }

  getSongs(): Promise<Song[]> {
    return this.http.get(this.apiUrl('songs.json'))
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
    return `${this.baseApiUrl}${action}`;
  }
}
