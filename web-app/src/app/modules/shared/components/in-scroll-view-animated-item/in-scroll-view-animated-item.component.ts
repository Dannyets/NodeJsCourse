import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { GeneralUtils } from 'src/app/modules/core/utils/general-utils';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-in-scroll-view-animated-item',
  templateUrl: './in-scroll-view-animated-item.component.html',
  styleUrls: ['./in-scroll-view-animated-item.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        display: 'show'
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
        display: 'none'
      })),
      transition('* => *', [
        animate('350ms')
      ]),
    ]),
  ],
})
export class InScrollViewAnimatedItemComponent {
  @ViewChild('container', { static: false })
  containerRef: ElementRef;
  
  inView = false;

  constructor(private generalUtils: GeneralUtils) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.inView = this.isInView();
  }

  isInView() {
    const rect = this.containerRef.nativeElement.getBoundingClientRect();

    if (this.generalUtils.isAround(rect.y, 0, 100) &&
        this.generalUtils.isAround(window.scrollY, 0, 100)) {
      return true;
    }

    return rect.top >= 0 && this.generalUtils.isAround(rect.top, window.innerHeight / 4, rect.bottom / 4);
  }
}
