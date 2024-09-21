import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = '';
  project: any;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.project = this.projectService.getProjectById(this.projectId);
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
