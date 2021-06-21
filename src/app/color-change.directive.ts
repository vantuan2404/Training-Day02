import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorChangeDirective {
  @Input() color: '';
  constructor(private _el: ElementRef) {
    this._el.nativeElement.style.background = 'red';
  }
}
