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
    'React',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'SASS',
    'TailwindCSS',
    'nodejs',
    // 'mongodb',
    'Git',
    'Windows',
    'Linux',
  ];
  learning: string[] = [
    // 'Kotlin',
    // 'java',
    // 'CSharp',
    'ruby',
    'mysql',
    // 'SQL',
    'RedHat',
    // 'reverse-engineer',
  ];
  constructor() {}
  ngOnInit(): void {}
}
