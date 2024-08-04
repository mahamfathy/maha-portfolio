import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { SocialMediaDirective } from '../../contact/social-media.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit, AfterContentInit {
  @ContentChild('content') contentChild?: ElementRef<HTMLElement>;
  @ContentChildren(SocialMediaDirective) top?: QueryList<SocialMediaDirective>;
  @ContentChildren(SocialMediaDirective, { descendants: true })
  nested?: QueryList<SocialMediaDirective>;

  constructor(private activatedroute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // not preffered to use them as they are static

    // const id = this.activatedroute.snapshot.params['id'];
    // console.log(id);
    // const projectId = this.activatedroute.snapshot.paramMap.get('id');
    // console.log(projectId);

    //subscribtion is better and dynamic observable
    this.activatedroute.params.subscribe((res: Params) => {
      // console.log(res['id'], typeof res['id']);
    });
    // or
    this.activatedroute.paramMap.subscribe((res: ParamMap) => {
      // console.log(res.get('id'));
    });
    const id = this.activatedroute.queryParams.subscribe((res) => {
      const id = Number(res['id']);
      // console.log(id);
    });
    this.activatedroute.queryParamMap.subscribe((res) => {
      // console.log(` query param map ${res.get('id')}`);
    });
  }

  viewProject() {
    this.router.navigate(['project'], { queryParams: { id: 5, name: 'maha' } });
  }
  nextProject() {
    this.router.navigate(['project'], {
      queryParams: {
        // id: id+1 ,
        projectId: 6,
        name: 'testing',
      },
      queryParamsHandling: 'merge',
    });
  }
  // ngAfterContentInit(): void {
  //   if (this.contentChild) {
  //     this.contentChild.nativeElement.style.color = 'red';
  //     console.log('content child ', this.contentChild.nativeElement.innerHTML);
  //   }
  // }
  ngAfterContentInit(): void {
    console.log('top', this.top);
  }
  get getTop(): string {
    return this.top ? this.top.map((n) => n.name).join(' / ') : '';
  }
  get getNested(): string {
    return this.nested ? this.nested.map((n) => n.name).join(' / ') : '';
  }
}
