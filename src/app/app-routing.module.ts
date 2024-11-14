import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared/components/auth/register/register.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { BlogModalComponent } from './shared/components/auth/blog-modal/blog-modal.component';
import { BlogListComponent } from './shared/components/auth/blog-list/blog-list.component';

const routes: Routes = [
  
  {
    path : '', redirectTo : '/login', pathMatch : 'full'
  },
  {
    path : 'register', component : RegisterComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'blogs', component : BlogModalComponent
  },
  {
    path : 'blogs/:id', component : BlogListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
