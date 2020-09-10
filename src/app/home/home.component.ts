import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'MIT Acheivements', cols: 2, rows: 1 },
          { title: 'Placements', cols: 2, rows: 1 },
          { title: 'Students', cols: 2, rows: 1 },
          { title: 'Faculty', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'MIT Acheivements', cols: 2, rows: 1 },
        { title: 'Placements', cols: 1, rows: 1 },
        { title: 'Students', cols: 1, rows: 2 },
        { title: 'Faculty', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
