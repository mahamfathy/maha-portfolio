import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SocialMediaDirective } from '../contact/social-media.directive';
import { Project } from '../shared/models/project';
import { ProjectsService } from '../shared/services/projects.service';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent, SocialMediaDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  showNested = false;
  @ViewChildren(ProjectComponent) children?: QueryList<ProjectComponent>;
  projects: Project[] = [];
  constructor(private projectsService: ProjectsService) {}
  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      console.log(projects);
      this.projects = projects;
      console.log(this.projects.forEach((project) => console.log(project)));
    });
  }
  ngAfterViewInit(): void {
    this.children?.changes.subscribe((res: QueryList<ProjectComponent>) => {
      console.log('res', res);
    });
    console.log('AfterViewInit children', this.children);
  }
  toggleNested(): void {
    this.showNested = !this.showNested;
  }
}
