import { Component } from '@angular/core'

@Component({
  selector: 'gradient-flow-button',
  imports: [],
  template: `
    <div class="rainbow-glow">
      <div class="card">
        <div class="content cursor-pointer">Content.</div>
      </div>
    </div>
  `,
  styles: `
    .rainbow-glow
      display: inline-block
      margin: 5px
      padding: 4px
      position: relative
      // overflow: hidden
      border-radius: 8px

      // &:before
      //   content: ''
      //   display: block
      //   position: absolute
      //   width: 200%
      //   right: -50%
      //   bottom: -50%
      //   top: -50%
      //   background-position: center center
      //   background-image: conic-gradient(from 0 at 50% 50%, transparent 50%, #fff845, #1cc98c, #24cbde, #57a9f7, #bd52f9, #ebb347)
      //   animation: rainbowGlowRotate 4s linear infinite
      //   filter: blur(150px)
      
      .card
        padding: 1px
        position: relative
        overflow: hidden
        border-radius: 8px
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.15)
        
        &:before
          content: ''
          display: block
          position: absolute
          width: 200%
          right: -50%
          bottom: -50%
          top: -50%
          background-position: center center
          background-image: conic-gradient(from 0 at 50% 50%, transparent 50%, #fff845, #1cc98c, #24cbde, #57a9f7, #bd52f9, #ebb347)
          animation: rainbowRotate 4s linear infinite
        
      .content
        padding: 0.25rem
        background: white
        border-radius: 8px
        position: relative
        z-index: 1

    @keyframes rainbowRotate
      0%
        transform: rotate(0deg)
      100%
        transform: rotate(360deg)

    @keyframes rainbowGlowRotate
      0%
        transform: rotate(0deg) scale(0.3)
      50%
        transform: rotate(180deg) scale(0.3)
      100%
        transform: rotate(360deg) scale(0.3)
  `
})
export class GradientFlowButtonComponent {

}
