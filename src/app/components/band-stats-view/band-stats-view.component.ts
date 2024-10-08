import { Component, Input, OnInit } from '@angular/core';
import { Musician } from 'src/app/models/musician';

@Component({
  selector: 'app-band-stats-view',
  templateUrl: './band-stats-view.component.html',
  styleUrls: ['./band-stats-view.component.scss'],
})
export class BandStatsViewComponent  implements OnInit {
  @Input() band!:Musician[];

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.band))
  }

}
