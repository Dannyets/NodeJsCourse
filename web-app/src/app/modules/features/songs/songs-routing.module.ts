import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongPageComponent } from './song-page';
import { SongListComponent } from './song-list';

const routes: Routes = [
  {
    path: '',
    component: SongListComponent,
  },
  { path: ':id', component: SongPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
