import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Github } from '../../clases/github';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GithubComponent implements OnInit {
  @Input() user: Github; 

  constructor() { }

  ngOnInit(): void{}
}