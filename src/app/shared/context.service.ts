import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatSidenav } from '@angular/material';

@Injectable()
export class ContextService {
  public sideFilters: any;
  public moduleTitle: Subject<string> = new Subject<string>();
  public videosCountPerPage: Subject<number> = new Subject<number>();

  private sidenav: MatSidenav;

    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }
    
    public open() {
        return this.sidenav.open();
    }
    
    public close() {
        return this.sidenav.close();
    }
}
