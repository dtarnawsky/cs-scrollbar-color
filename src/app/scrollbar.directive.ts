import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appScrollbarTheme]'
})
export class ScrollbarThemeDirective {
  constructor(el: ElementRef) {
    const stylesheet = `
      ::-webkit-scrollbar {
      width: 10px;
      }
      ::-webkit-scrollbar-track {
      background: green; // eg: var(--ion-background-color);
      }
      ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: var(--ion-color-light);
      border: 8px solid purple;
      }
      ::-webkit-scrollbar-thumb:hover {
      }
    `;
    if (!el || !el.nativeElement || !el.nativeElement.shadowRoot) {return;}
    const styleElmt = el.nativeElement.shadowRoot.querySelector('style');
    if (styleElmt) {
      styleElmt.append(stylesheet);
    } else {
      const barStyle = document.createElement('style');
      barStyle.append(stylesheet);
      el.nativeElement.shadowRoot.appendChild(barStyle);
    }

  }
}
