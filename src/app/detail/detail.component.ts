import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ConfigService } from "../config.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user:any;
  constructor(
    private route: ActivatedRoute,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.config.getUserById(id).subscribe(data => {
        this.user = data;
      })
    }

  }

}
