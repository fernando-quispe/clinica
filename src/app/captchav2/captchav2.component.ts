import { Component, inject } from '@angular/core';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-captchav2',
  standalone: true,
  imports: [RecaptchaModule],
  templateUrl: './captchav2.component.html',
  styleUrl: './captchav2.component.css'
})
export class Captchav2Component {

  recaptchaService = inject(ReCaptchaV3Service);

  executeRecaptcha(){
    this.recaptchaService.execute('').subscribe((token)=> {
      console.log(token)
    } )
  }

  executeRecaptchaVisible(token:any){
    console.log(token);
  }
}
