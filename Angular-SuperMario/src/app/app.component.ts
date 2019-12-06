import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-SuperMario';
  datos;

  constructor(private apiService:ApiService){}
  ngOnInit(){
    this.apiService.getSuperMario().subscribe((data)=>{
       this.datos =  data['amiibo'];
    });
  }

}
