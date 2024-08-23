import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';
import { SutdentPageComponent } from './Pages/sutdent-page/sutdent-page.component';

const routes: Routes = [
 {path:'', component:HomePageComponent,title:'Home page'},
 {path:'about-us', component:AboutPageComponent,title:'about Us'},
 {path:'contact-us', component:ContactPageComponent,title:'Contact Us'},
 {path:'studients', component:SutdentPageComponent, title:'Student Lists'},
 {path:'studient/create', component:StudentCreateComponent, title:'Create Student'},
 {path:'studient/:id/edit', component:StudentEditComponent, title:'Student Edit'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
