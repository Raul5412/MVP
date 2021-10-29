import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var M: any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

  next(){
    console.log("Función next");
    var uno = <HTMLFormElement>document.getElementById('uno');
    var dos = <HTMLFormElement>document.getElementById('dos');
    var tres = <HTMLFormElement>document.getElementById('tres');
    var cuatro = <HTMLFormElement>document.getElementById('cuatro');
    var uno_1 = <HTMLFormElement>document.getElementById('1');
    var dos_2 = <HTMLFormElement>document.getElementById('2');
    var tres_3 = <HTMLFormElement>document.getElementById('3');
    if(uno.style.display === 'block'){
      uno.style.display = 'none';
      dos.style.display = 'block';
      tres.style.display = 'none';
      cuatro.style.display = 'none';
      uno_1.style.backgroundColor = 'grey';
      dos_2.style.backgroundColor = 'white';
      tres_3.style.backgroundColor = 'grey';
    }
    else if(dos.style.display === 'block'){
      uno.style.display = 'none';
      dos.style.display = 'none';
      tres.style.display = 'block';
      cuatro.style.display = 'block';
      uno_1.style.backgroundColor = 'grey';
      dos_2.style.backgroundColor = 'grey';
      tres_3.style.backgroundColor = 'white';
    }
    else if(tres.style.display === 'block'){
      uno.style.display = 'none';
      dos.style.display = 'none';
      tres.style.display = 'block';
      cuatro.style.display = 'block';
      uno_1.style.backgroundColor = 'grey';
      dos_2.style.backgroundColor = 'grey';
      tres_3.style.backgroundColor = 'white';
    }
  }

  back(){
    console.log("Función back");
    var uno = <HTMLFormElement>document.getElementById('uno');
    var dos = <HTMLFormElement>document.getElementById('dos');
    var tres = <HTMLFormElement>document.getElementById('tres');
    var cuatro = <HTMLFormElement>document.getElementById('cuatro');
    var uno_1 = <HTMLFormElement>document.getElementById('1');
    var dos_2 = <HTMLFormElement>document.getElementById('2');
    var tres_3 = <HTMLFormElement>document.getElementById('3');
    if(uno.style.display === 'block'){
      uno.style.display = 'block';
      dos.style.display = 'none';
      tres.style.display = 'none';
      cuatro.style.display = 'none';
      uno_1.style.backgroundColor = 'white';
      dos_2.style.backgroundColor = 'grey';
      tres_3.style.backgroundColor = 'grey';
    }
    else if(dos.style.display === 'block'){
      uno.style.display = 'block';
      dos.style.display = 'none';
      tres.style.display = 'none';
      cuatro.style.display = 'none';
      uno_1.style.backgroundColor = 'white';
      dos_2.style.backgroundColor = 'grey';
      tres_3.style.backgroundColor = 'grey';
    }
    else if(tres.style.display === 'block'){
      uno.style.display = 'none';
      dos.style.display = 'block';
      tres.style.display = 'none';
      cuatro.style.display = 'none';
      uno_1.style.backgroundColor = 'grey';
      dos_2.style.backgroundColor = 'white';
      tres_3.style.backgroundColor = 'grey';
    }
  }

  enviar(event:any):void{
    console.log("Función enviar");
    //Parte 1
    let nombre : string = (<HTMLInputElement>document.getElementById("nombre")).value;
    let ape_pat : string = (<HTMLInputElement>document.getElementById("ape_pat")).value;
    let ape_mat : string = (<HTMLInputElement>document.getElementById("ape_mat")).value;
    let edad : number = parseInt((<HTMLInputElement>document.getElementById("edad")).value);
    //Parte 2
    let correo : string = (<HTMLInputElement>document.getElementById("correo")).value;
    let numero : number = parseInt((<HTMLInputElement>document.getElementById("numero")).value);
    let tienda : string = (<HTMLInputElement>document.getElementById("tienda")).value;
    let tipo : string = (<HTMLInputElement>document.getElementById("tipo")).value;
    //Parte 3
    let producto : string = (<HTMLInputElement>document.getElementById("producto")).value;
    let unidades : number =  parseInt((<HTMLInputElement>document.getElementById("unidades")).value);
    let comentarios : string = (<HTMLInputElement>document.getElementById("comentarios")).value;

    if(nombre === "" || ape_pat === "" || ape_mat === "" || isNaN(edad)
    || correo === "" || isNaN(numero) || tienda === "" || tipo == ""
    || producto === "" || isNaN(unidades) || comentarios === ""){
      alert("¡Llena todos los campos, por favor!");
    }
    else{
      M.toast({
        html: 'Gracias por su preferencia, lo esperamos pronto! :)'
      });
      alert("Gracias por su preferencia, lo esperamos pronto! :)");
      this._document.defaultView!.location.reload();
    }
  }

}
