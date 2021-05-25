import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details-card',
  templateUrl: './movie-details-card.component.html',
  styleUrls: ['./movie-details-card.component.scss'],
})
export class MovieDetailsCardComponent implements OnInit {

  @Input() movieInfo
  constructor() { }

  ngOnInit() {}

}
