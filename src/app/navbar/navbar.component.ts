import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageTitle : string = 'New page';
  pageTitle1 : string ;
  pageTitle3 : string ;

  constructor() { }

  ngOnInit(): void {
  }

}
