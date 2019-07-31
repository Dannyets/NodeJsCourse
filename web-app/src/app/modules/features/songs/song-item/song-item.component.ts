import { Component, Input } from '@angular/core';
import { Song } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent {
  @Input() song: Song;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onSongSelect() {
    this.router.navigate([`songs`, this.song.id]);
  }
}
