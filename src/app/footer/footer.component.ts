import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  Inject,
} from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements AfterViewInit, OnInit {
  constructor(
    private sharedService: SharedService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  floatBoxHeight: number = 0;
  mobile: any = '';
  mail: any = '';
  name: any = '';

  @ViewChild('floatBox', { static: true }) floatBox!: ElementRef;

  ngAfterViewInit() {
    this.floatBoxHeight = this.floatBox.nativeElement.offsetHeight;
  }

  ngOnInit() {
    this.sharedService.getData().subscribe((data) => {
      this.mobile = data.mobile;
      this.mail = data.mail;
      this.name = data.name;

    });
  }

  toHome() {
    this.scrollToElement('home');
  }

  toAbout() {
    this.scrollToElement('aboutme');
  }

  toSkills() {
    this.scrollToElement('skills');
  }

  toEducation() {
    this.scrollToElement('education');
  }

  toProject() {
    this.scrollToElement('project');
  }

  private scrollToElement(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      const elementRect = element.getBoundingClientRect().top;
      // i want to add the extra 100px to the scroll position so that the navbar doesn't overlap the section title when scrolling to it
      const offset = 84;
      const bodyRect = this.document.body.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;

      const offsetPosition = elementPosition - offset;

      // console.log(offsetPosition);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    // if (element) {
    //   element.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start',
    //     inline: 'nearest',
    //   });
    // }
  }

  
  isActive: string | null = null;

  setActive(fragment: string) {
    this.isActive = fragment;
  }

  clearActive() {
    this.isActive = null;
  }
}
