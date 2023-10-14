import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  habilities: string[] = [
    'c-language',
    'angular',
    'react',
    'javascript',
    'typescript',
    'html5',
    'css3',
    'sass',
    'tailwindcss',
    'nodejs',
    'mongodb',
    'git',
    'windows',
    'linux',
  ];
  learning: string[] = [
    'kotlin',
    'java',
    'mysql',
    'redhat',
  ];
  constructor() {}
  ngOnInit(): void {}
}
