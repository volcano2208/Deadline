import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  list: any;
  // tslint:disable-next-line: typedef
  constructor() { }
  parentObjectId: any;
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'email', 'hobby', 'career', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Hero[]>();
  // tslint:disable-next-line: typedef
  delete(id: number) {
    if (id > -1) {
      this.dataSource.data.splice(id, 1);
      this.dataSource = new MatTableDataSource(this.dataSource.data);
    }
  }
  ngOnInit(): void {

  }
  // tslint:disable-next-line: typedef
  add(list: any) {
    this.dataSource.data = list;
  }
  // tslint:disable-next-line: typedef
  update(id: number) {
    this.parentObjectId = id;
  }
}
