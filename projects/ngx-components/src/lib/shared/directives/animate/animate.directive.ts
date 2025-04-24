import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[animate]',
  standalone: true
})
export class AnimateDirective {
  elRef: ElementRef

  constructor(elRef: ElementRef) {
    this.elRef = elRef 
  }
    
  @HostListener('click') onClick(event: MouseEvent) {
    this.elRef.nativeElement.classList.remove('animate')
    this.elRef.nativeElement.classList.add('animate')
    setTimeout(() => {
      this.elRef.nativeElement.classList.remove('animate')
    },700)
  }
}
