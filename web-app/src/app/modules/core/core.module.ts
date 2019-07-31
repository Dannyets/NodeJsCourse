import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralUtils } from './utils/general-utils';
import { ThemeService, SongsApiService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GeneralUtils,
    ThemeService,
    SongsApiService
  ]
})
export class CoreModule { }
