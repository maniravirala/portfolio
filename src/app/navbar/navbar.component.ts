import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Component, Inject, Renderer2, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private sharedService: SharedService
  ) {}

  dataArray: any = {};

  ngOnInit() {
    this.sharedService.getData().subscribe((data) => {
      this.dataArray = data;
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

  toContact() {
    this.scrollToElement('contactus');
  }

  private scrollToElement(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (elementId == 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    if (element) {
      const elementRect = element.getBoundingClientRect().top;
      // i want to add the extra 100px to the scroll position so that the navbar doesn't overlap the section title when scrolling to it
      const offset = 80;
      const bodyRect = this.document.body.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;

      const offsetPosition = elementPosition - offset;

      console.log(offsetPosition, window.scrollY);
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
