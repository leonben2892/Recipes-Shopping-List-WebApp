import { Directive, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective implements OnInit{
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}

    ngOnInit(){
        
    }
}