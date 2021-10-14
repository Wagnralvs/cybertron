import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatasComponent } from '../datas/datas.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-datas-property',
  templateUrl: './datas-property.component.html',
  styleUrls: ['./datas-property.component.css']
})
export class DatasPropertyComponent implements OnInit {
  
  ValorDoImovel= 10000;
  ValorDaEntrada = 50 ;

 // y = 'ValorDaEntrada' ;const x = 'ValorDoImovel' ; 
  //const 
  //const total = 'x - y ;

  formulario: FormGroup = new FormGroup({
    TipoDeImovel: new FormControl('', [Validators.required,]) ,
    RendaMensal: new FormControl (null),
    ValorDoImovel : new FormControl (null), 
    ValorDaEntrada: new FormControl(null),
    QuantidaDePacelas: new FormControl('', [Validators.required, Validators.max(360)]),
    Celular: new FormControl(null),
    })  //


  constructor() { }

  calcularEntrada(){
    this.ValorDaEntrada = Number(this.ValorDoImovel)/Number (2);


  }

  usuario: any ={
    nome: '',
     email: '',
   }

  ngOnInit(): void {
    this.usuario={};

    console.log("total")
  }
  onSubmit(form: any){
    console.log(form);

    console.log(this.usuario);

    //test

    
  }

}
