import {Directive, ElementRef} from '@angular/core';


@Directive({
  selector: '[weBackground]'
})
export class BackgroundDirective {

  private index = 1;

  constructor(private el: ElementRef) {


    if (window.innerWidth > 400) {
      this.setupBg();
    }

  }

  private setupBg(): void {
    this.el.nativeElement.style.transition = 'background-image 1s ease-in-out';
    this.el.nativeElement.style.backgroundSize = 'cover';


    this.nextBackground();

    setInterval(() => {
      this.nextBackground();

    }, 5000);

  }

  private nextBackground(): void {
    this.el.nativeElement.style.backgroundImage = `url(/assets/images/bgs/ethereum-background-${this.index}.jpg)`;
    this.index++;
    this.index = this.index > 4 ? 1 : this.index;
  }

}
