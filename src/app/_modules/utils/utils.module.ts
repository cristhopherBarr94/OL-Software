import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [LoadingComponent, MenuComponent, FooterComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, MenuComponent, FooterComponent],
})
export class UtilsModule {}
