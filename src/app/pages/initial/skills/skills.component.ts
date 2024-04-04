import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly habilities: string[] = [
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

  readonly learning: string[] = [
    'mysql',
    'csharp'
  ];
}
