import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampledataService } from '../sampledata.service';
import { news } from '../news';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  locdata: Array<any> = [];

  constructor(public _route: ActivatedRoute, public Sampledata: SampledataService) { }
  ngOnInit(): void {
    this.getValue();
  }

  getValue() {
    this._route.params.subscribe(
      param => {
        const string = param['location']
        this.Sampledata.findBylocation(string).subscribe(
          d => {
            this.locdata = d;
            this.Sampledata.setData(this.locdata); console.log(this.locdata)
          })
      })

  }


}