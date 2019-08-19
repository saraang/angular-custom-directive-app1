import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public el:ElementRef) {
    console.log('Hi')
    el.nativeElement.style.backgroundColor = 'yellow';
   }



}