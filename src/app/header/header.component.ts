import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }
  routes = [
    {
      routelink: "/first-component",
      routename: "first component"
    },
    {
      routelink: "/second-component",
      routename: "Second component"
    },
    {
      routelink: "/login",
      routename: "Login"
    },
    {
      routelink: "/dashboard",
      routename: "Dashboard"
    },

  ]
  ngOnInit(): void {
    
  }

}
