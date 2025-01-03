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
    'csharp',
    'dotnet',
    // 'sass',
    // 'tailwindcss',
    'nodejs',
    'git',
    'windows',
    'linux',
  ];

  readonly learning: string[] = [
    'rust',
    'mysql',
  ];
}
