import { Component,Input,OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})

export class ListCitasComponent implements OnInit {
  @Input() listadoCitas:any;
  @Output() deleteCita = new EventEmitter<number>();
  contructor(){}

  ngOnInit(): void {

  }
  eliminarCita(index:number){
    this.deleteCita.emit(index);
  }
}
