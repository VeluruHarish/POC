import { Component, OnInit } from '@angular/core';
import { SampledataService } from './sampledata.service';
import { news } from './news';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public Sampledata: SampledataService, public router: Router) { }
  ngOnInit(): void {
    this.getall();

  }
  data: Array<news> = []
  newdata: Array<news> = []
  filtereddata: Array<news> = []
  set = new Set();
  set1 = new Set();

  getall() {
    this.Sampledata.findall().subscribe(
      d => {
        this.data = d;
        console.log(d);
        this.data.forEach(d => {
          this.set.add(d.country)
        })
        console.log(this.set)
      }
    )
  }
  start(location: string) {
    this.router.navigate([`body/${location}`])
  }

}
