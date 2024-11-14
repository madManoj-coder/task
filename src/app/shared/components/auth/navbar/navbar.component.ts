import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/service/auth.service';
import { ConfirmDialogBoxComponent } from '../confirm-dialog-box/confirm-dialog-box.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      data: { message: 'Are you sure you want to logout?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
        this.router.navigate(['/login']);  // Navigate to login after logout
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
