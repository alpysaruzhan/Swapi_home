import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omdp_api_home';
  episode_id: string = '';
  response: any;

  constructor(private http: HttpClient){}

  search(){
    this.http.get('https://swapi.dev/api/films/'+ this.episode_id)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response) 
    })
  }
}
