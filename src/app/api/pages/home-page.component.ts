import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Photo } from '../interface/api.interface';

@Component({
  selector: 'api-home-page',
  templateUrl: './home-page.component.html'
})

export class HomePageComponent {
  constructor(private apiService:ApiService) { }

  get photos():Photo[]{
    return this.apiService.photoList;
  }

  get newPhotos():Photo[]{
    return this.apiService.newPhotos;
  }

}
