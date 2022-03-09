import { Component, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'dialog-open-details',
  templateUrl: './dialog-open-details.html',
  styleUrls: ['./dialog-open-details.scss']
})

export class DialogOpenDetails {

  constructor(public dialogRef: MatDialogRef<DialogOpenDetails>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
