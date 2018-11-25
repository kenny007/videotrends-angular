import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextService } from '@shared/context.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
})
export class AppComponent {
  @ViewChild('filterSlide') public sidenav: MatSidenav;

  constructor(private appContext: ContextService) {
  }
  
  ngOnInit(): void {
    this.appContext.setSidenav(this.sidenav);
	}

}
