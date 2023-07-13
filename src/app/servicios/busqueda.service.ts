import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private apiUrl = 'http://127.0.0.1:8000/api/solicitud';
  constructor(private http: HttpClient) {}

  buscarPorCodigo(codigo: string) {
    return this.http.get<any>(`http://127.0.0.1:8000/api/solicitud/${codigo}/`);
  }
  cambiarEstado(codigo: string, nuevoEstado: string) {
    const url = `${this.apiUrl}/${codigo}/editar/`;

    return this.http.post(url, { estado: nuevoEstado });
  }
}

