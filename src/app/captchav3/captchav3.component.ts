import { Token } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { RecaptchaCommonModule } from 'ng-recaptcha/lib/recaptcha-common.module';

@Component({
  selector: 'app-captchav3',
  standalone: true,
  imports: [RecaptchaModule],
  templateUrl: './captchav3.component.html',
  styleUrl: './captchav3.component.css'
})
export class Captchav3Component {

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
