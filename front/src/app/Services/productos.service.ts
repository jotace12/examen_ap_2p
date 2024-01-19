import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproductos } from '../Interfaces/iproductos';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ProductosService {
   private urlBase:String = 
   'http://localhost/examen_ap_2p/Inventario/Controllers/productos.Controller.php?op=';
    constructor(private clientePhp:HttpClient) {}
  
    todos():Observable<Iproductos[]>{
      return this.clientePhp.get<Iproductos[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<Iproductos>{
     var sto = new FormData();
     sto.append('id_productos', id.toString());
    return this.clientePhp.post<Iproductos>(this.urlBase + 'uno',sto);
  }
  
  insertar(producto:Iproductos):Observable<any>{
    var sto = new FormData();
    sto.append('id_categorias', producto.id_categorias.toString());
    sto.append('nombre', producto.nombre);
    sto.append('precio', producto.precio.toString());
    sto.append('stock', producto.stock.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', sto);
  
  }
  actualizar(producto:Iproductos, id: number):Observable<any>{
    var sto = new FormData();
    sto.append('id_productos', id.toString());
    sto.append('id_categorias', producto.id_categorias.toString());
    sto.append('nombre', producto.nombre);
    sto.append('precio', producto.precio.toString());
    sto.append('stock', producto.stock.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', sto);
  }
  eliminar(id:number):Observable<any>{
    var sto = new FormData();
    sto.append('id_productos', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', sto);
  }
  

  }