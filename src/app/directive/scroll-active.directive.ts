import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appScrollActive]',
})
export class ScrollActiveDirective implements OnInit {
  @Input() appScrollActive: string = '';

  activeFunc() {
    const navLinks = document.querySelectorAll(this.appScrollActive);
    navLinks.forEach((link) => {
      const anchor = link as HTMLAnchorElement;
      const section = document.querySelector(anchor.hash) as HTMLElement;
      let top = window.scrollY;
      let height = section.offsetHeight;
      let offset = section.offsetTop - 200;
      let bottom = offset + height;
      let id = section.id;

      if (section && top > offset && top < bottom) {
        navLinks.forEach((otherLink) => {
          if (otherLink !== link) {
            otherLink.classList.remove('active');
          }
        });

        link.classList.add('active');
      }
    });
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.activeFunc();
    let stringScrollPosition = localStorage.getItem('scrollPosition');
    let scrollPosition = parseInt(stringScrollPosition!, 10);
     

    if (scrollPosition) {
      window.scrollTo({top: scrollPosition+100, behavior: 'smooth' });
    } 
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    localStorage.setItem('scrollPosition', window.scrollY.toString());
    this.activeFunc();
  }
}
