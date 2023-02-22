import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgxStarRatingModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgxStarRatingModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatTooltipModule
  ]

})
export class MaterialModule { }
