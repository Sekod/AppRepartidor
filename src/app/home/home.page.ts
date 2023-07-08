import { Component } from '@angular/core';
import { BusquedaService } from '../servicios/busqueda.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultados: any[] = [];
  codigoBusqueda: string = '';

  constructor(private busquedaService: BusquedaService) {}
  buscar() {
    if (this.codigoBusqueda) {
      this.busquedaService.buscarPorCodigo(this.codigoBusqueda)
        .subscribe(
          (response: any | any[]) => { // Puedes utilizar "any | any[]" para permitir tanto un objeto como un arreglo de objetos
            if (Array.isArray(response)) {
              this.resultados = response; // Asigna el arreglo de objetos a la propiedad resultados
            } else {
              this.resultados = [response]; // Convierte el objeto en un arreglo y asígnalo a la propiedad resultados
            }
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
}
