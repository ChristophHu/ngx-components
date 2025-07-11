import { Component, ElementRef, inject, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stack-component',
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
  // encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true
})
export class StackComponent {

  private elementRef = inject(ElementRef)
  private host = this.elementRef.nativeElement

  config = {
    explode: false,
    theme: 'light',
    stack: {
      x1: -20, // { label: 'x1', min: -360, max: 360, step: 1 }
      y1: 35, // { label: 'y1', min: -360, max: 360, step: 1 }
      x2: 30, // { label: 'x2', min: -360, max: 360, step: 1 }
      step: 5, // { label: 'z', min: 2, max: 10, step: 0.1 }
      tx: 0.5, // { label: 'x', min: -3, max: 3, step: 0.1 }
      ty: -0.5, // { label: 'y', min: -3, max: 3, step: 0.1 }
    },
    default: { x1: 0, y1: 0, x2: 0, step: 0, tx: 0, ty: 0 }
  }

  constructor() {
    this.host.dataset.explode = this.config.explode
    this.host.dataset.theme = 'dark'
    this.setProp(this.host, this.config.default)
  }

  toggle() {
    this.config.explode = !this.config.explode
    this.host.dataset.explode = this.config.explode
    this.host.dataset.theme = this.config.theme
    this.config.explode ? this.setProp(this.host, this.config.stack) : this.setProp(this.host, this.config.default)
  }

  setProp(host: any, config: { [key: string]: any }) {
    for (const key in config) {
      host.style.setProperty('--' + key, config[key])
    }
  }
  
  removeProp(host: any, config: { [key: string]: any }) {
    for (const key in config) {
      host.style.removeProperty('--' + key)
    }
  }


  explode() {
    console.log('explode', this.config.explode)
    this.config.explode = !this.config.explode
  }
  
  // const sync = (event) => {
  //   if (
  //     !document.startViewTransition ||
  //     event.target.controller.view.labelElement.innerText !== 'theme'
  //   )
  //     return update()
  //   document.startViewTransition(() => update())
  // }
  
  // ctrl.addBinding(config, 'explode', {
  //   label: 'explode',
  // })
  
  // const translations = ctrl.addFolder({ title: 'translations', expanded: false })
  // translations.addBinding(config, 'step', {
  //   label: 'z',
  //   min: 2,
  //   max: 10,
  //   step: 0.1,
  // })
  // translations.addBinding(config, 'tx', {
  //   label: 'x',
  //   min: -3,
  //   max: 3,
  //   step: 0.1,
  // })
  // translations.addBinding(config, 'ty', {
  //   label: 'y',
  //   min: -3,
  //   max: 3,
  //   step: 0.1,
  // })
  
  // const rotations = ctrl.addFolder({ title: 'rotations', expanded: false })
  // const x1 = rotations.addBinding(config, 'x1', {
  //   label: 'x1',
  //   min: -360,
  //   max: 360,
  //   step: 1,
  // })
  // const y1 = rotations.addBinding(config, 'y1', )
  // const x2 = rotations.addBinding(config, 'x2', {
  //   label: 'x2',
  //   min: -360,
  //   max: 360,
  //   step: 1,
  // })
  
  // ctrl.addBinding(config, 'theme', {
  //   label: 'Theme',
  //   options: {
  //     System: 'system',
  //     Light: 'light',
  //     Dark: 'dark',
  //   },
  // })
  
  // ctrl.on('change', sync)
  // update()
  
  // const dialog = document.querySelector('dialog')
  // const trigger = document.querySelector('.heading button')

  // trigger.addEventListener('click', () => {
  //   dialog[dialog.matches('[open]') ? 'close' : 'show']()
  // })
}
