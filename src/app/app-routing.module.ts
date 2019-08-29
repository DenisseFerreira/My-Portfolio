import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [

  { path: "inicio", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "sobremi", component: AboutComponent },
  { path: "contacto", component: ContactComponent },
  { path: "proyectos", component: ProjectsComponent },
  { path: "habilidades", component: SkillsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
