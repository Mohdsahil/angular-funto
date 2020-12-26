import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ConfigService } from '../config.service';

// import { users } from '../users';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  users:any;
  user:any;
 
  constructor(
    private route: ActivatedRoute,
    private config: ConfigService
  ) { 
    this.config.getUsers().subscribe(data => {
      this.users = data
    } )
  }

  ngOnInit(): void {
    
  //  const id = this.route.snapshot.paramMap.get("id");
  //   if (id) {
  //     this.config.getUserById(id).subscribe(data => {
  //       this.user = data;
  //       this.users = [];
  //     })
  //   }
  }

  meto():void {
    console.log(this.users)
  }

}
