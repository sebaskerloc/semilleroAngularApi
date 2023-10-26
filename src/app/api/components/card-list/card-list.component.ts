import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Photo } from '../../interface/api.interface';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent  {

  constructor(private apiService:ApiService){

  }


  @Input()
  public photos: Photo[]=[];

  @Input()
  public newPhotos:Photo[]= [];


  x(n:number){
    for (let i = 0; i < 5 ; i++) {
      this.newPhotos[i]  = this.photos[n];
      n++;
   }

  }

  @ViewChild('booleanInput')

public booleanInput!:ElementRef<HTMLInputElement>;

  all(v:number){
    //va a entrar a la condición cuando el usuario presione false
      if(v===0){
        for(let i = 0; i<20; i++){
         if(this.photos[i].completed === true ){
            this.photos[i].completed = " " ;


         }else{
          this.photos[i].completed = false;
         }
        }//for
      }else{

        for(let i = 0; i<20; i++){
          if(this.photos[i].completed === false ){
             this.photos[i].completed = " " ;
          }else{
            this.photos[i].completed = true;
          }
         }//for

      }
  }

  allTwo(){
    const v = this.booleanInput.nativeElement.value;
    if(v==='false'){
      for(let i = 0; i<20; i++){
       if(this.photos[i].completed === true ){
          this.photos[i].completed = " " ;


       }else{
        this.photos[i].completed = false;
       }
      }//for
    }else{

      for(let i = 0; i<20; i++){
        if(this.photos[i].completed === false ){
           this.photos[i].completed = " " ;
        }else{
          this.photos[i].completed = true;
        }
       }//for

    }


  }
  // console.log(x(0));


}
