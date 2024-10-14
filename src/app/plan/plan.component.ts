// import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


// @Component({
//   selector: 'app-plan',
//   templateUrl: './plan.component.html',
//   standalone: true,
//   imports: [MatButtonModule, MatDialogModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class PlanComponent {
  
//   constructor(private dialog: MatDialog) {}

//   openDialog() {
//     const dialogRef = this.dialog.open(DialogContentExampleDialog, {
//       data: { message: 'You have successfully subscribed to this plan!' },
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }
// }

// @Component({
//   selector: 'dialog-content-example-dialog',
//   template: `
//     <h1 mat-dialog-title>Subscription Successful</h1>
//     <div mat-dialog-content>
//       <p>{{ data.message }}</p>
//     </div>
//     <div mat-dialog-actions>
//       <button mat-button (click)="close()">Close</button>
//     </div>
//   `,
// changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class DialogContentExampleDialog {
//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private dialogRef: MatDialogRef<DialogContentExampleDialog> // Inject MatDialogRef
//   ) {}

//   close() {
//     this.dialogRef.close(); // Close the dialog
//   }
// }

import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanComponent {
  plans = [
    { name: 'Aluminium Pass', subscribed: false },
    { name: 'Diamond Pass', subscribed: false },
    { name: 'Platinum Pass', subscribed: false }
  ];

  constructor(private dialog: MatDialog) {}

  openDialog(index: number) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: { message: 'You have successfully subscribed to this plan!' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.plans[index].subscribed = true; // Update subscription status
      }
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <h1 mat-dialog-title>Subscription Successful</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Close</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogContentExampleDialog> // Inject MatDialogRef
  ) {}

  close() {
    this.dialogRef.close(true); // Close the dialog and send a signal
  }
}
