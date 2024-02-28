/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

@Component({
  selector: 'text',
  standalone: true,
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: `
    :host {
      font-size: var(--text-size);
      color: var(--text-color);
    }
  `,
})
export class TextComponent {}
