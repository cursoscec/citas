import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas:any[] = [];

  agregaCita(cita:any){
    console.log(cita);
    this.listCitas.push(cita);
    console.log(this.listCitas);
  }
  eliminarCitaListado(index:number){
    this.listCitas.splice(index,1);
  }
}
