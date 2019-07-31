import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InScrollViewAnimatedItemComponent } from './components/in-scroll-view-animated-item/in-scroll-view-animated-item.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InScrollViewAnimatedItemComponent,
    LayoutComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InScrollViewAnimatedItemComponent,
    LayoutComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
