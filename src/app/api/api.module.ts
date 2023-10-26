import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page.component';
import { ApiJsonComponent } from './components/api-json/api-json.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomePageComponent,
                 ApiJsonComponent,
                 CardListComponent
  ],
  exports: [HomePageComponent],
  imports: [CommonModule],
  providers: [],
})
export class ApiModule { }
