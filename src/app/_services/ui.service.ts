import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(public dialog: MatDialog) {}

  openDialog(component, cssClass, hasBackdrop?, data?) {
    this.dialog.open(component, {
      data: { data },
      hasBackdrop: hasBackdrop,
      panelClass: cssClass,
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
