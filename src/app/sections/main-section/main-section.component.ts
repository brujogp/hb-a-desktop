import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['../../../assets/css/common-styles-sections.css', './main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public goto(): void {
    this.router.navigate(['app'], {});
  }
}
