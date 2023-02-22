import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratingBoxComponent } from './generating-box/generating-box.component';


@NgModule({
  declarations: [
    GeneratingBoxComponent
  ],
  exports: [
    GeneratingBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
