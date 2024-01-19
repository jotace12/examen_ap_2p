import { Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProveedoresComponent } from './Views/categorias/categorias.component';
import { ProductosComponent } from './views/productos/productos.component';
import { NuevoProveedorComponent } from './Views/categorias/nuevo-categoria/nuevo-categoria.component';
import { NuevoProductoComponent } from './Views/productos/nuevo-producto/nuevo-producto.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'categorias',
    component: ProveedoresComponent,
  },
  {
    path: 'nuevo-categoria',
    component: NuevoProveedorComponent,
  },
  
  {
    path: 'nuevo-producto',
    component: NuevoProductoComponent,
  },
  {
    path: 'editar-categoria/:id',
    component: NuevoProveedorComponent,
  },
  
  {
    path: 'editar-producto/:id',
    component: NuevoProductoComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
