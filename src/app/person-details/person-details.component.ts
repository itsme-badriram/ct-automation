import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
export interface UserData {
  'Title': string;
  'User Name': string;
  'Full Name': string;
  'Email': string;
  'Roles': string;
  'Phone Number': string;
}
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  isDisabled = true;
  displayedColumns: string[] = ['Title', 'User Name', 'Full Name', 'Email', 'Roles', 'Phone Number', 'Delete', 'Edit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const users: UserData[] = [
      // tslint:disable-next-line: max-line-length
      {Title: 'Teacher', 'User Name': '12345', 'Full Name': 'Ramanujan', Email: 'xyz@gmail.com', Roles: 'Administrator', 'Phone Number': '9984475867'},
      {Title: 'Teacher', 'User Name': '12345', 'Full Name': 'Ramanujan', Email: 'xyz@gmail.com', Roles: 'Administrator', 'Phone Number': '9984475867'},
      {Title: 'Teacher', 'User Name': '12345', 'Full Name': 'Ramanujan', Email: 'xyz@gmail.com', Roles: 'Administrator', 'Phone Number': '9984475867'},
      {Title: 'Teacher', 'User Name': '12345', 'Full Name': 'Ramanujan', Email: 'xyz@gmail.com', Roles: 'Administrator', 'Phone Number': '9984475867'},
      {Title: 'Teacher', 'User Name': '12345', 'Full Name': 'Ramanujan', Email: 'xyz@gmail.com', Roles: 'Administrator', 'Phone Number': '9984475867'}];

    this.dataSource = new MatTableDataSource(users);
  }
active;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('query')) {
        //Navigate Back
        return;
      }
      this.active = paramMap.get('query');
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onEdit() {
    this.isDisabled = false;
  }
  onSubmit() {
    this.isDisabled = true;
  }
  onNavigate(url) {
    this.router.navigateByUrl('/person-details/' + url);

  }
  function(active) {
    console.log('Yes');
    if (this.active === active) {
      const style = {
        color: '#3f51b5',
        'border-right': '5px solid #3f51b5'
      };
      return style;
    }

  }
}
