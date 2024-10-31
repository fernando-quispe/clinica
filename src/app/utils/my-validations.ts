import { AbstractControl } from "@angular/forms";

export class MyValidations {

    static isCaptchaWithParam(primerParam: string) {
  
      return (control: AbstractControl) =>{
        console.log('MyValidationprimerParam ',primerParam);
        const value = control.value;
        console.log('MyValidationValue ',value);
        
        if(primerParam != value) {
          console.log("return true");
          return { isCaptcha: true };
        }
        
        console.log("return false");
        return null;
      };
    }
}