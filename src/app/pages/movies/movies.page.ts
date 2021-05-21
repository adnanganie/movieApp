import { Component, OnInit } from '@angular/core';

import { MovieService, SearchType } from '../../services/movie.service'
import { Observable } from 'rxjs';

import { IonLoaderService } from '../../services/utils/ion-loader.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  errorOccur : string = '';
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService, private ionLoaderService: IonLoaderService) { }

  ngOnInit() {
    this.searchTerm = "ertugrul"
   this.onSearch()
  }

  onSearch(){
    this.errorOccur = this.movieService.errorMsg
  
    this.results = this.movieService.searchMovie(this.searchTerm, this.type)
  }
  
  displayAutoLoader() {
    this.ionLoaderService.autoLoader();
  }

  showLoader() {
    this.ionLoaderService.simpleLoader();
  }

  hideLoader() {
    this.ionLoaderService.dismissLoader();
  }

  customizeLoader() {
    this.ionLoaderService.customLoader();
  }
}
