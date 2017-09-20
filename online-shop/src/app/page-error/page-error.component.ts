import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.goToHome();
  }

  public goToHome(): void {
    this._router.navigate(['/home'])
      .then(() => {
        window.location.reload();
      });
  }

}
