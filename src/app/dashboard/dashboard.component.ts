import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataArray: any = {};

  @ViewChild('aboutMeWidth') aboutMeWidth!: ElementRef;
  @ViewChild('eduWidth') eduWidth!: ElementRef;
  @ViewChild('skillWidth') skillWidth!: ElementRef;

  constructor(
    private sharedService: SharedService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.sharedService.getData().subscribe((data) => {
      this.dataArray = data;
    });
  }

  toAbout() {
    this.scrollToElement('aboutme');
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
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
  }

  getAboutMeWidth(): number {
    if (this.aboutMeWidth && this.aboutMeWidth.nativeElement) {
      const aboutMeSpanWidth = this.aboutMeWidth.nativeElement.offsetWidth;
      // You can perform additional calculations or adjustments here if needed
      return aboutMeSpanWidth + 60;
    }
    return 150; // Default width if the span element is not available
  }

  getEducationWidth(): number {
    if (this.eduWidth && this.eduWidth.nativeElement) {
      const eduSpanWidth = this.eduWidth.nativeElement.offsetWidth;
      // You can perform additional calculations or adjustments here if needed
      return eduSpanWidth + 60;
    }
    return 150; // Default width if the span element is not available
  }

  getSkillWidth(): number {
    if (this.skillWidth && this.skillWidth.nativeElement) {
      const skillSpanWidth = this.skillWidth.nativeElement.offsetWidth;
      // You can perform additional calculations or adjustments here if needed
      return skillSpanWidth + 60;
    }
    return 150; // Default width if the span element is not available
  }
}
