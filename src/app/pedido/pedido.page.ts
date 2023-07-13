import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedido',
  templateUrl: 'pedido.page.html',
  styleUrls: ['pedido.page.scss'],
})
export class PedidoPage {
  codigoPedido: string | undefined;
  nuevoEstado: string | undefined;
  respuesta: any;

  constructor(private http: HttpClient) {}

  reemplazarEstado() {
    const url = 'http://127.0.0.1:8000/api/solicitud/'; // Reemplaza con la URL correcta de tu API de Django

    const body = {
      codigo: this.codigoPedido,
      estado: this.nuevoEstado
    };

    this.http.post(url, body).subscribe(
      (response) => {
        this.respuesta = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
