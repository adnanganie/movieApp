import { Component, OnInit } from '@angular/core';

import { MovieService, SearchType } from '../../services/movie.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onSearch(){
    this.results = this.movieService.searchMovie(this.searchTerm, this.type)
  }
  
}
