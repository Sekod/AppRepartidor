import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  constructor(private http: HttpClient) {}

  buscarPorCodigo(codigo: string) {
    return this.http.get<any>(`http://127.0.0.1:8000/api/solicitud/${codigo}/`);
  }
}

