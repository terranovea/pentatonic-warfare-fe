import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './account-tab.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './account-tab-routing.module';
import { GenreChipModule } from 'src/app/components/genre-chip/genre-chip.module';
import { CustomCardModule } from 'src/app/components/custom-card/custom-card.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    GenreChipModule,
    CustomCardModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
