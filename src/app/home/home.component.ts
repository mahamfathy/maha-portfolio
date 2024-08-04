import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ProjectComponent } from '../projects/project/project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  isVisible = false;
  @ViewChild('title', { static: false, read: ElementRef })
  title?: ElementRef<HTMLElement>;
  @ViewChild('child', { static: true, read: ElementRef })
  child?: ElementRef<HTMLElement>;
  @ViewChild(ContactComponent, { static: true, read: ElementRef })
  contact?: ContactComponent;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    // console.log('OnInit title', this.title);
    // console.log('OnInit child', this.child);
    // console.log('OnInit contact', this.contact);
  }
  ngAfterViewInit(): void {
    // console.log('AfterViewInit title', this.title);
    // console.log('AfterViewInit child', this.child);
  }
  toggle(): void {
    this.isVisible = !this.isVisible;
    this.changeDetectorRef.detectChanges();
    // console.log('toggle title', this.title);
    // console.log('toggle child', this.child);
  }
}
