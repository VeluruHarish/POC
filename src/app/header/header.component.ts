import { Component, Input, OnInit } from '@angular/core';
import { SampledataService } from '../sampledata.service';
import { news } from '../news';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shareddata1: any;
  constructor(public Sampledata: SampledataService, public _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shareddata1 = this.Sampledata.getData();
    console.log(this.shareddata1)
  }
}
