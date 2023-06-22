import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  habilities: string[] = [
    'C',
    'Angular',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'SASS',
    'TailwindCSS',
    'Git',
    'Windows',
    'Linux',
  ];
  learning: string[] = [
    'React',
    'CSharp',
    'DotNET',
    'SQL',
    'Kotlin',
    'RedHat',
    'reverse-engineer',
  ];
  constructor() {}
  ngOnInit(): void {}
}
