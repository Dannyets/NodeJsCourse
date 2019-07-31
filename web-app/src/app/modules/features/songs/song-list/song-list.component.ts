import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../../core';
import { SongsManagerService } from '../songs-manager.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Observable<Song[]>;

  constructor(private songManagerService: SongsManagerService) { }

  ngOnInit() {
    this.songs = this.songManagerService.songs;
  }
}
