import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductosService } from '../../../Services/productos.service';
import { CommonModule } from '@angular/common';
import { ProveedorService } from '../../../Services/categoria.service';
import { Icategoria } from '../../../Interfaces/icategoria';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.css',
})
export class NuevoProductoComponent {
  title = 'Nuevo producto';
  id!: number;

  ListaProveedores: Icategoria[];
  producto: FormGroup = new FormGroup({
    id_categorias: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
  });
  constructor(
    private productoServicio: ProductosService,
    private rutas: Router,
    private parametros: ActivatedRoute,
    private proveedorServicio: ProveedorService
  ) {}
  async ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    await this.cargaProveedor();
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo producto';
    } else {
      this.title = 'Actualizar producto';
      this.productoServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.producto.patchValue({
          id_categorias: res.id_categorias,
          nombre: res.nombre,
          precio: res.precio,
          stock: res.stock,
        });
      });
    }
  }
  cargaProveedor() {
    this.proveedorServicio.todos().subscribe((res) => {
      this.ListaProveedores = res;
    });
  }

  get f() {
    return this.producto.controls;
  }
  grabar() {
    Swal.fire({
      title: 'Productos',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.productoServicio.insertar(this.producto.value).subscribe((res) => {
            Swal.fire({
              title: 'Productos',
              text: 'Se insertó con éxito el registro',
              icon: 'success',
            });
            this.rutas.navigate(['/productos']);
            this.id = 0;
          });
        } else {
          this.productoServicio
            .actualizar(this.producto.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Productos',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/productos']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'Productos',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
