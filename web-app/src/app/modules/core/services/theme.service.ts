import { Injectable } from '@angular/core';
import * as themes from '../themes';

@Injectable()
export class ThemeService {
  setTheme(themeName: string) {
    if (!themeName) { return; }

    const theme = themes[themeName];

    if (!theme) { return; }

    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
