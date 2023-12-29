import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataArray: any = {
    name: '',
    skillArray: [],
    education: [],
    mail: '',
    mobile: '',
    place: '',
    skill: '',
    fname: '',
    lname: '',
    social: {},
  };

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getData().subscribe((data) => {
      this.dataArray = data;
    });
  }
}
