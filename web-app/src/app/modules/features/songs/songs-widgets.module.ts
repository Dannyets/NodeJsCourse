import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongListComponent } from './song-list/song-list.component';
import { SongItemComponent } from './song-item/song-item.component';
import { SharedModule } from '../../shared/shared.module';
import { SongPageComponent } from './song-page/song-page.component';

@NgModule({
  declarations: [
    SongItemComponent,
    SongListComponent,
    SongPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SongItemComponent,
    SongListComponent,
    SongPageComponent
  ]
})
export class SongsWidgetsModule { }
