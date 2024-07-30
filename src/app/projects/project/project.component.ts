import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}
  ngOnInit(): void {
    // not preffered to use them as they are static

    // const id = this.activatedroute.snapshot.params['id'];
    // console.log(id);
    // const projectId = this.activatedroute.snapshot.paramMap.get('id');
    // console.log(projectId);

    //subscribtion is better and dynamic observable
    this.activatedroute.params.subscribe((res: Params) => {
      console.log(res['id'], typeof res['id']);
    });
    // or
    this.activatedroute.paramMap.subscribe((res: ParamMap) => {
      console.log(res.get('id'));
    });
  }
}
