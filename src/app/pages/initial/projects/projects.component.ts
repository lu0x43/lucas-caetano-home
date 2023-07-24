import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    // {
    //   name: 'Project 1',
    //   image: 'assets/icons/image/project1.png',
    //   tecnologies: ['React'],
    // },
    {
      name: 'Project 2',
      image: 'assets/icons/image/project2.png',
      tecnologies: ['Kotlin'],
    },
    // {
    //   name: 'Project 3',
    //   image: 'assets/icons/image/project3.png',
    //   tecnologies: [],
    // },
  ];

  constructor() {}
  ngOnInit(): void {}
}
