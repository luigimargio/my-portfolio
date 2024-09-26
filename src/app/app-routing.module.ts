import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';
import { Project1Component } from './project-details/project1/project1.component';
import { Project2Component } from './project-details/project2/project2.component';
import { Project3Component } from './project-details/project3/project3.component';
import { Project4Component } from './project-details/project4/project4.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } },
  { path: 'projects/project1', component: Project1Component },
  { path: 'projects/project2', component: Project2Component },
  { path: 'projects/project3', component: Project3Component },
  { path: 'projects/project4', component: Project4Component },
  //{ path: 'projects/:id', component: ProjectDetailComponent, data: { animation: 'Projects/:id' }  },
  //{ path: 'contact', component: ContactComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
