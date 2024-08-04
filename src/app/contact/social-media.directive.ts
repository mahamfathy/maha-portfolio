import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'social-media',
  standalone: true,
})
export class SocialMediaDirective {
  @Input({ required: true }) name?: string;
}
