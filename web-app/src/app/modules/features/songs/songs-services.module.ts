import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsManagerService } from './songs-manager.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SongsManagerService
  ]
})
export class SongsServicesModule { }
