import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpService } from '../../services/http.service';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  constructor(private dialog: MatDialog, private httpService: HttpService) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    (dialogConfig.maxWidth = '80vw'),
      (dialogConfig.maxHeight = '80vh'),
      (dialogConfig.height = '100%'),
      (dialogConfig.width = '100%'),
      this.httpService.getTableData().subscribe((data) => {
        dialogConfig.data = {
          dataKey: data,
        };
        this.dialog.open(ModalComponent, dialogConfig);
      });
  }
}
