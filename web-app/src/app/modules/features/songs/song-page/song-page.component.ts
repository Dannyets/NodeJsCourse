import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsManagerService } from '../songs-manager.service';
import { Song } from 'src/app/modules';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.css']
})
export class SongPageComponent implements OnInit {
  song: Song;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private songsManagerService: SongsManagerService) {
    this.subscription = this.route.paramMap.subscribe(async (p) => await this.loadSong(+p.get('id')));
  }

  async loadSong(id: number) {
    this.song = await this.songsManagerService.getSong(id);
  }

  ngOnInit() {
  }

}
