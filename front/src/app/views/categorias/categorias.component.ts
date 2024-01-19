import { Component } from '@angular/core';
import { Icategoria } from '../../Interfaces/icategoria';
import { ProveedorService } from '../../Services/categoria.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class ProveedoresComponent {
  title = 'categorias';
  proveedores: Icategoria[];

  constructor(private proveedoresServicio: ProveedorService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.proveedoresServicio.todos().subscribe((listaproveedores) => {
      this.proveedores = listaproveedores;
      console.log(listaproveedores);
    });
  }
  alerta() {
    Swal.fire('categorias', 'Mensaje en categorias', 'success');
  }

  eliminar(id_categorias: number) {
    Swal.fire({
      title: 'categorias',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.proveedoresServicio.eliminar(id_categorias).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'categorias',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'categorias',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
