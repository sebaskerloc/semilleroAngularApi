import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Comments, Photo, SearchResponse } from '../interface/api.interface';
import { CardListComponent } from '../components/card-list/card-list.component';

@Injectable({providedIn: 'root'})


export class ApiService {

  public commentList:Comments[] = [];
  public photoList:Photo[] = [];
  public newPhotos:Photo[]= [];




  private serviceUrl: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient ) { }


  search(newString:string):void{
    if(newString.trim().length === 0 ) return;

    let word = newString.trim();
    let num:number = 1;
    let n:number = 0;
    // console.log("api.service ->", word,word.length);
    while(num<=20){
    const params = new HttpParams()
    // .set('q',1)

    this.http.get< Photo>(`${this.serviceUrl}/${word}/${num}`).subscribe(resp => {

      this.photoList.push(resp);
      n++
      if(n<=5){
        this.newPhotos.push(resp);
      }
      // console.log({endPoint: this.photoList}, n);


    });
    // n++;
    num++;


    }//while()
  if(num === 20) {
  num =1 ;
  n=0;
  }//if()




  }//search()




}
