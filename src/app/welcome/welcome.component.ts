import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { SemanticService } from '../semantic.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  enteredText: string = '';
  constructor(
    private semanticService: SemanticService,
    private router: Router
  ) {}
  submitText() {
    this.semanticService.processInput(this.enteredText)
      .subscribe(response => {
        console.log("enteredText",response);
        this.router.navigate(['/result'], { state: { data: response } });
      }, error => {
        console.error('Error:', error);
      });
  }
}

