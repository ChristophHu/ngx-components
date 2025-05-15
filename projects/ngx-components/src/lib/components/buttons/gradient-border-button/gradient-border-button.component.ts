import { Component } from '@angular/core';

@Component({
  selector: 'gradient-border-button',
  imports: [],
  template: `
    <button>Gradient-Border-Button</button>
  `,
  styles: `
    $color1: var(--accent-lighter)
    $color2: var(--accent-darker)

    button
      position: relative
      padding: 0.5rem
      margin: 1rem
      display: inline-block
      font-size: 1rem

      &:before
        content: ''
        position: absolute
        inset: 0
        border-radius: 8px
        padding: 2px /* control the border thickness */
        background: linear-gradient(45deg, $color1, $color2)
        -webkit-mask: linear-gradient(#fff 0 0) content-box,  linear-gradient(#fff 0 0)
        -webkit-mask-composite: xor
                mask-composite: exclude
  `
})
export class GradientBorderButtonComponent {

}
