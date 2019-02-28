import {Directive, ElementRef} from '@angular/core';


@Directive({
  selector: '[weBackground]'
})
export class BackgroundDirective {

  private index = 1;

  constructor(private el: ElementRef) {
<<<<<<< HEAD
    this.el.nativeElement.style.transition = 'background-image 1s ease-in-out';
=======

    if (window.innerWidth > 400) {
      this.setupBg();
    }

  }

  private setupBg(): void {
    this.el.nativeElement.style.transition = 'background-image 1s ease-in-out';
    this.el.nativeElement.style.backgroundSize = 'cover';
>>>>>>> 7704cd1a3e47f9a0170657964fa9fa78cc098cfe

    this.nextBackground();

    setInterval(() => {
      this.nextBackground();
<<<<<<< HEAD
    }, 3000);
=======
    }, 5000);
>>>>>>> 7704cd1a3e47f9a0170657964fa9fa78cc098cfe
  }

  private nextBackground(): void {
    this.el.nativeElement.style.backgroundImage = `url(/assets/images/bgs/ethereum-background-${this.index}.jpg)`;
    this.index++;
    this.index = this.index > 4 ? 1 : this.index;
    console.log('nextBg', this.el.nativeElement.style.backgroundImage);
  }

}
