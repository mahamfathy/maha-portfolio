import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project';
import { ProjectsService } from '../shared/services/projects.service';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private projectsService: ProjectsService) {}
  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      console.log(projects);
      this.projects = projects;
      console.log(this.projects.forEach((project) => console.log(project)));
    });
  }
}
