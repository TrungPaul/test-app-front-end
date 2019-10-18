import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../Service/project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }
  projects :any ;
  ngOnInit() {
    this.projectService.getListProject()
      .subscribe(data => {
        this.projects = data;
        console.log(this.projects);
      });
  }

  removeProject(project) {
    const conf = confirm(`Bạn có chắc chắn muốn xóa project ${project.name} ?`);
    if (conf) {
      this.projectService.removeProject(project.id)
        .subscribe(data => {
          this.projects = this.projects.filter(item => item.id != project.id);
        });
    }
  }

}