import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ScrollbarThemeDirective } from './scrollbar.directive';

@NgModule({
  declarations: [
    ScrollbarThemeDirective
  ],
  exports: [
    ScrollbarThemeDirective
  ],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
})
export class ComponentsModule { }
