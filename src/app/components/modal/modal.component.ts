import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
export interface TableData {
  id: number;
  name: string;
  description: string;
  webReference: string;
  number?: number;
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, AfterViewInit {
 ELEMENT_DATA: TableData[];
 @ViewChild(MatSort) sort: MatSort;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder) {
    this.ELEMENT_DATA = data.dataKey;
  }
  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'description',
    'webReference',
  ];
  myForm: FormGroup;

dataSource;
selection;
  ngOnInit() {

    this.dataSource = new MatTableDataSource<TableData>(this.ELEMENT_DATA);
    this.selection = new SelectionModel<TableData>(true, []);

    this.myForm = this.fb.group({
      name: [''],
      description: [''],
      webReference: [''],
    })
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TableData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.number + 1
    }`;
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
       let index: number = this.ELEMENT_DATA.findIndex(d => d === item);
       this.ELEMENT_DATA.splice(index,1)
       this.dataSource = new MatTableDataSource<TableData>(this.ELEMENT_DATA);
     });
     this.selection = new SelectionModel<TableData>(true, []);
  }

  submitForm(){
    const newRow = { id: (this.ELEMENT_DATA.length) +1 , name:this.myForm.value.name, description: this.myForm.value.description , webReference: this.myForm.value.webReference }
    this.ELEMENT_DATA = [newRow, ...this.ELEMENT_DATA]
    this.dataSource = new MatTableDataSource<TableData>(this.ELEMENT_DATA);

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
