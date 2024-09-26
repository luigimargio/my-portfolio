import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, Project } from '../project.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = '';
  project!: Project;
  sanitizedContent!: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    const projectData = this.projectService.getProjectById(this.projectId);
    if (projectData) {
      this.project = projectData;
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(
        this.project.customContent || ''
      );
    }
  }
  getEngineIcon(engine: string): string {
    if (engine === 'Unity') {
      return 'assets/icons/unity-icon.png';
    } else if (engine === 'Unreal Engine') {
      return 'assets/icons/unreal-icon.png';
    } else {
      return 'assets/icons/default-engine-icon.png';
    }
  }
  
}
