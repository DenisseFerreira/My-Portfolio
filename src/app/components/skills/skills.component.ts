import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/skills';
import { skillsJson } from 'src/app/skillsJson';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  Myskills : Skills[]=[];

  constructor() { }

  ngOnInit() {
    this.Myskills = skillsJson;
  }

}
