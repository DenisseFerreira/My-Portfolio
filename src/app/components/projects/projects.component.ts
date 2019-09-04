import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/projects';
import { ProjectsJson } from 'src/app/projectsJson';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  MyProyects: Projects[]=[];

  constructor() { 
   
  }

  ngOnInit() {
    this.MyProyects = ProjectsJson;
  }

}
