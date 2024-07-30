import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  constructor(private projectsService: ProjectsService) {}
  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = Object.values(projects);
      console.log(this.projects);
    });
  }
}
