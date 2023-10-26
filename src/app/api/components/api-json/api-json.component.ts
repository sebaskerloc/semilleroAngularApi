import { Component, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'api-json',
  templateUrl: './api-json.component.html',
  styleUrls: ['./api-json.component.css']
})
export class ApiJsonComponent {

  constructor(private apiService:ApiService){

  }

 @ViewChild('txtInput')
public tagInput!:ElementRef<HTMLInputElement>;



  public search(){

    const newString = this.tagInput.nativeElement.value;

    if(this.apiService.photoList.length !== 0){
     let conter = this.apiService.photoList.length;
      while(conter >= 0){
        this.apiService.photoList.pop();
        conter--;
      }
    }
    if(this.apiService.newPhotos.length !== 0){
      let conter = this.apiService.newPhotos.length;
       while(conter >= 0){
         this.apiService.newPhotos.pop();
         conter--;
       }
     }
    this.apiService.search(newString);
    this.tagInput.nativeElement.value = '';
  }


}
