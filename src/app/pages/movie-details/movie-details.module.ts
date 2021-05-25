import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailsPageRoutingModule } from './movie-details-routing.module';

import { MovieDetailsPage } from './movie-details.page';
import { MovieDetailsCardComponent } from 'src/app/components/movie-details-card/movie-details-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailsPageRoutingModule
  ],
  declarations: [MovieDetailsPage, MovieDetailsCardComponent]
})
export class MovieDetailsPageModule {}
