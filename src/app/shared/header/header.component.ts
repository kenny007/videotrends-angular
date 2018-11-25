import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ContextService } from '../context.service';

@Component({
  selector   : 'app-page-header',
  templateUrl: './header.component.html',
  styleUrls  : [ './header.component.scss' ]
})

export class HeaderComponent {
  public title$: Subject<string> = this.appContext.moduleTitle;
  constructor(private appContext: ContextService) {
    
  }
  openSideNav(){
    this.appContext.open();
  }
}

