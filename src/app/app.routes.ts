import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './config/guards/protected.guard';
const routes: Routes = [
  {
    path: 'clients', component: AppMainComponent,
    children:[
      {
        path:'', loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
