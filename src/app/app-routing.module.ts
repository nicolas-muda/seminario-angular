import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdpAboutComponent } from './mdp-about/mdp-about.component';
import { MdpBooksComponent } from './mdp-books/mdp-books.component';
import { MdpPremieresComponent } from './mdp-premieres/mdp-premieres.component';

const routes: Routes = [
  {
    path:'',
    component:MdpBooksComponent,
    pathMatch:'full',
  },
  {
    path:'books',
    component:MdpBooksComponent
  },
  {
    path:'premieres',
    component:MdpPremieresComponent
  },
  {
    path:'about',
    component:MdpAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
