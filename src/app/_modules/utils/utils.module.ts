import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
@NgModule({
  declarations: [LoadingComponent, MenuComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, MenuComponent],
})
export class UtilsModule {}
