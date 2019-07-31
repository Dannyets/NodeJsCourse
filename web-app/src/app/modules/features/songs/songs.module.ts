import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsWidgetsModule } from './songs-widgets.module';
import { SongsServicesModule } from './songs-services.module';

@NgModule({
  imports: [
    CommonModule,
    SongsRoutingModule,
    SongsWidgetsModule,
    SongsServicesModule
  ],
})
export class SongsModule { }
