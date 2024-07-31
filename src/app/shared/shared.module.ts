import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
const components: any = [];
const modules = [CommonModule];
@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
