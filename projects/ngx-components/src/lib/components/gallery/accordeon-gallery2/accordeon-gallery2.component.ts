import { Component } from '@angular/core'

@Component({
  selector: 'accordeon-gallery2',
  imports: [],
  template: `
    <div class="box-container">
      <div class="first box">
        <input type="radio" id="blue-box" class="radio" name="box" checked/>
        <label for="blue-box"class="radio-label"></label>
        <div classs="box-content">
          <h2 class="box-title">Giraffe</h2>
          <p>Graceful African mammal with a towering neck, distinctive spotted coat, and heart-shaped patches. Feeds on leaves high in trees, using its long neck and prehensile tongue.</p>
          <a href="https://www.zoobasel.ch/en/tiere/tierlexikon/tierbeschreibung/96/kordofan-giraffe/" target="_blank" class="button">Learn more about it</a>
        </div>
      </div>

      <div class="second box">
        <input type="radio" id="green-box" class="radio" name="box"/>
        <label for="green-box"class="radio-label"></label>
        <div classs="box-content">
          <h2 class="box-title">Rhino</h2>
            <p>Robust, thick-skinned herbivore found in Africa and Asia. Characterized by its horn on the nose, used for defense and territorial display. Despite its tough appearance, it's vulnerable and endangered due to poaching.</p>
          <a href="https://www.zoobasel.ch/en/tiere/tierlexikon/tierbeschreibung/120/nashorn/" target="_blank" class="button">Learn more about it</a>
            
        </div>
      </div>

      <div class="third box">
        <input type="radio" id="red-box" class="radio" name="box"/>
        <label for="red-box"class="radio-label"></label>
        <div classs="box-content">
          <h2 class="box-title">Elephant</h2>
          <p>Majestic and intelligent herbivore native to Africa and Asia. Known for its massive size, long trunk for feeding and communication, and impressive tusks. Highly social and family-oriented.</p>
          <a href="https://www.zoobasel.ch/en/tiere/tierlexikon/tierbeschreibung/92/afrikanischer-elefant/" target="_blank" class="button">Learn more about it</a>
        </div>
      </div>
    </div>
  `,
  styles: `
    :root
      --color: black
      --spacing: 3vw
      --spacing-h: 3vh
      --title-size: 3vw
      --box-title-size: clamp(24px, var(--title-size), 36px)

    .first
      --color: var(--primary)
    .second 
      --color: var(--secondary)
    .third 
      --color: var(--tertiary)

    a 
      text-decoration: none
      color: black

    p 
      line-height: 1.6em
      font-size: 1rem
      margin-bottom: 2em
      
    .box-container 
      display: flex
      height: 20%
      padding: var(--spacing)
      gap: var(--spacing)    

    .box 
      max-height: 100%
      min-width: clamp(80px, calc(var(--spacing)*2), 120px)
      border-radius: 8px
      background: linear-gradient(0deg, black, color-mix(in srgb, var(--color) 75%, white))
      position: relative
      overflow-y: hidden
      padding: 0
      transition: all .3s ease-out, minWidth 5s
      color: white
      
      &:has([name="box"]:checked) 
        flex:1
        padding: calc(var(--spacing-h)*4) calc(var(--spacing)*2)
        
        .pet 
          translate: -25% 0
          width: 200px
          bottom: -20px
        
        .box-title 
          rotate: 0deg
          position: relative
          translate: none
          left: inherit
          margin-bottom: .75em
          font-size: clamp(24px, calc(var(--title-size)*1.825), 72px)
        
        p,
        .button 
          max-width: 100%
          opacity: 1
          translate: 0 0
          transition: opacity .3s ease-in .25s, translate .3s ease-in .25s, maxWidth 0s
        
        .radio-label 
          cursor: inherit
        
      &:hover 
        //background: linear-gradient(0deg, var(--color), color-mix(in srgb, var(--color) 95%, white))
        
        .pet 
          translate: -25% 0
        
    .box-content 
      position: relative
    
    p,
    .button 
      max-width: 0
      opacity: 0
      translate: 0 -5px
      transition: all 0s ease-in
    
    .button 
      display: inline-block
      translate: 0 -10px
      font-size: .9em
      font-weight: bold
      padding: .75em 2.5em
      background: color-mix(in srgb, var(--color) 8%, white)
      border-radius: 100px
      color: color-mix(in srgb, var(--color) 70%, black)
      box-shadow: 15px 15px 20px color-mix(in srgb, var(--color) 95%, black)
      position: relative
      z-index: 3
      transition: all .3s ease-in
    
    .button:hover 
      color: color-mix(in srgb, var(--color) 90%, black)
      background: color-mix(in srgb, var(--color) 0%, white)
    
    .box-title 
      font-family: 'Borel', cursive
      position: absolute
      margin: 0
      line-height: 1em
      text-shadow: 1px 1px 2px color-mix(in srgb, var(--color) 95%, black)
      font-size: var(--box-title-size)
      left: calc((var(--spacing)*1.5 + 2em)/2)
      top: var(--spacing)
      transform-origin: 0 0
      rotate: 90deg
      transition: all .3s ease-out
    
    .radio 
      display: none
    
    .radio-label 
      width: 100%
      height: 100%
      display: block
      position: absolute
      z-index: 1
      top: 0
      left: 0
      cursor: pointer
      
    .pet 
      width: 100px
      position: absolute
      bottom: -15px
      left: 0
      rotate: 20deg
      translate: -25% 100%
      transition: all .3s ease-out
  `
})
export class AccordeonGallery2Component {

}