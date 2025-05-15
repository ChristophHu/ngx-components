import { Component } from '@angular/core';

@Component({
  selector: 'stack',
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  // import { Pane } from 'https://cdn.skypack.dev/tweakpane@4.0.4'

  config = {
    explode: false,
    theme: 'light',
    x1: -20,
    y1: 35,
    x2: 30,
    step: 3,
    tx: 0.5,
    ty: -0.5,
  }
  
  // const ctrl = new Pane({
  //   title: 'Config',
  //   expanded: true,
  // })
  
  update() {
    document.documentElement.dataset['theme'] = this.config.theme
    document.documentElement.dataset['exploded'] = '' + this.config.explode
    document.documentElement.style.setProperty('--tx', '' + this.config.tx)
    document.documentElement.style.setProperty('--ty', '' + this.config.ty)
    document.documentElement.style.setProperty('--x1', '' + this.config.x1)
    document.documentElement.style.setProperty('--y1', '' + this.config.y1)
    document.documentElement.style.setProperty('--x2', '' + this.config.x2)
    document.documentElement.style.setProperty('--step', '' + this.config.step)
  
    // x1.disabled = y1.disabled = x2.disabled = !this.config.explode
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
  // const y1 = rotations.addBinding(config, 'y1', {
  //   label: 'y1',
  //   min: -360,
  //   max: 360,
  //   step: 1,
  // })
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
