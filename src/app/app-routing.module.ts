import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
 {
   path: "",
   component: LayoutComponent
 },
 {
  path: "project",
  component: ProjectComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
