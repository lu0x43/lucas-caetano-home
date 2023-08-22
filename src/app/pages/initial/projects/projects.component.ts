import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Project 1',
      image: 'assets/icons/image/project1.png',
      tecnologies: ['React'],
      color: 'blue2',
    },
    {
      name: 'Project 2',
      image: 'assets/icons/image/project2.png',
      tecnologies: ['java'],
      color: 'yellow',
    },
    // {
    //   name: 'Project 3',
    //   image: 'assets/icons/image/project3.png',
    //   tecnologies: ['ruby'],
    //   color: 'red',
    // },
  ];

  constructor() {}
  ngOnInit(): void {}

  shadowStyle(color: string): string {
    const colorClasses: Record<string, string> = {
      blue: '#053768',
      blue1: '#3D5A91',
      blue2: '#347FC7',
      red: '#EE5B4A',
      red1: '#C0392B',
      red2: '#C11F1F',
      yellow: '#FDC600',
    };
    const colorClass = colorClasses[color] || 'bg-gray-200';

    return `0 4px 6px -1px ${colorClass}`;
  }
}
