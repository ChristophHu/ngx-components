import { Component } from '@angular/core'

@Component({
  selector: 'accordeon-gallery',
  imports: [],
  template: `
    <div class="wrapper">
      <div class="item bg-gray-100">
        <div class="content">S</div>
      </div>
      <div class="item bg-gray-200">
        <div class="content">L</div>
      </div>
      <div class="item bg-gray-300">
        <div class="content">I</div>
      </div>
      <div class="item bg-gray-400">
        <div class="content">D</div>
      </div>
      <div class="item bg-gray-500">
        <div class="content">E</div>
      </div>
      <div class="item bg-gray-600">
        <div class="content">!</div>
      </div>
    </div>
  `,
  styles: `
    $background: var(--tertiary)

    .wrapper   
      display: flex
      justify-content: space-around
      height: 50%

    .item
      align-items: center
      background-color: #ccc
      box-shadow: 10px 0 10px rgba(0,0,0,.25)
      color: var(--dark)
      font-size: 200px
      font-weight: bold
      overflow: hidden
      position: relative
      transform: translateZ(0)
      transition: width .2s ease-out
      width: 33%
      will-change: width, transform
      
      &:hover
        width: 100%

    .item:nth-child(5n+1)
      background-color: $background

    .item:nth-child(5n+2)
      background-color: $background

    .item:nth-child(5n+3)
      background-color: $background

    .item:nth-child(5n+4)
      background-color: $background

    .item:nth-child(5n+5)
      background-color: $background

    .content
      cursor: default
      position: absolute
      text-align: center
      top: 50%
      transform: translate(0%, -50%)
      transition-duration: .2s
      transition-property: transform, width
      transition-timing-function: linear, ease-out
      width: 100%

    @for $i from 1 through 6
      .item:nth-child(#{$i})
        z-index: 6 - $i
  `
})
export class AccordeonGalleryComponent {

}
