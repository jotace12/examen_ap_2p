import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategoria } from '../Interfaces/icategoria';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private urlBase: string = environment.URL + 'categoria.Controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<Icategoria[]> {
    return this.clientePhp.get<Icategoria[]>(this.urlBase + 'todos');
  }
  insertar(proveedor: Icategoria): Observable<any> {
    var prov = new FormData();
    prov.append('nombre', proveedor.nombre);
    prov.append('descripcion', proveedor.descripcion);
    return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('id_categorias', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prov);
  }
  uno(id: number): Observable<Icategoria> {
    var prov = new FormData();
    prov.append('id_categorias', id.toString());
    return this.clientePhp.post<Icategoria>(this.urlBase + 'uno', prov);
  }
  actualizar(proveedor: Icategoria, id: number): Observable<any> {
    var prov = new FormData();
    prov.append('id_categorias', id.toString());
    prov.append('nombre', proveedor.nombre);
    prov.append('descripcion', proveedor.descripcion);
    return this.clientePhp.post(this.urlBase + 'actualizar', prov);
  }
}
