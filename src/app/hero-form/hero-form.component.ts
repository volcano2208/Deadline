import { Hero } from './../hero';
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})


export class HeroFormComponent implements OnInit {
  @Output() listFinal = new EventEmitter<any>();
  @Input() childMes = '';
  careers = ['Developer', 'Fresher', 'Project Manager'];
  hobbies = ['Soccer', 'Baseball'];
  submitted = false;
  flag = 0;
  hero: Hero = {
    id: new FormControl().value,
    name: new FormControl().value,
    age: new FormControl().value,
    address: new FormControl().value,
    email: new FormControl().value,
    career: new FormControl().value,
    hobby: new FormControl().value,
  };
  list: any[] = [
  ];

  // tslint:disable-next-line: typedef
  onSubmit() {
    // ($event.target as HTMLButtonElement).disabled = true;
    const newHero: Hero = {
      id: this.hero.id,
      name: this.hero.name,
      address: this.hero.address,
      age: this.hero.age,
      career: this.hero.career,
      hobby: this.hero.hobby,
      email: this.hero.email
    };
    if (!this.list.some((item) => item.id === newHero.id)) {
      this.flag = 0;
      this.list.push(newHero);
      this.submitted = true;
      this.listFinal.emit(this.list);
    }
    else {
      // tslint:disable-next-line: no-debugger
      this.flag = 1;
      const alterHero: Hero = {
        id: this.hero.id,
        name: this.hero.name,
        address: this.hero.address,
        age: this.hero.age,
        career: this.hero.career,
        hobby: this.hero.hobby,
        email: this.hero.email
      };
      for (const hero in this.list) {
        if (this.list[hero].id === alterHero.id) {
          this.list[hero].name = alterHero.name;
          this.list[hero].age = alterHero.age;
          this.list[hero].address = alterHero.address;
          this.list[hero].career = alterHero.career;
          this.list[hero].email = alterHero.email;
          this.list[hero].hobby = alterHero.hobby;
        }
      }
    }

  }
  // tslint:disable-next-line: typedef
  ngOnInit(): void {
  }

  constructor() {

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    if (this.childMes) {
      const f: Hero = this.list.find(item => item.id === this.childMes);
      this.hero.id = f.id;
      this.hero.name = f.name;
      this.hero.age = f.age;
      this.hero.email = f.email;
      this.hero.address = f.address;
      this.hero.hobby = f.hobby;
      this.hero.career = f.career;
    }
  }
}

