import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '../project.service';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
              animate(
                '0.5s ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  getEngineIcon(engine: string): string {
    if (engine === 'Unity') {
      return '../../assets/icons/unity-icon.png';
    } else if (engine === 'Unreal Engine') {
      return 'assets/icons/unreal-icon.png';
    } else {
      return 'assets/icons/default-engine-icon.png';
    }
  }
  
}
