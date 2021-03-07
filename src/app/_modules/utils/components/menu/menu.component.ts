import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/_services/ui.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public userName: string = 'Andrés Felipe Garcia Castro';
  constructor(private router: Router, private uiService: UiService) {}

  ngOnInit(): void {}
  public logout() {
    this.uiService.openDialog(LoadingComponent, 'loading-modal', true);
    setTimeout(() => {
      this.uiService.closeDialog();
      this.router.navigate(['login'], { queryParamsHandling: 'preserve' });
    }, 2000);
  }
}
