import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCaptcha]',
  standalone: true
})

export class CaptchaDirective implements OnInit {
  
  @Input() userAnswer: number | null = null; // Valor de entrada del usuario
  @Output() captchaResolved = new EventEmitter<boolean>(); // Emite true si el CAPTCHA es correcto
  
  private captchaQuestion: string = '';
  private correctAnswer: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.generateCaptcha();
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.captchaQuestion);
  }

  ngOnChanges() {
    this.checkCaptcha();
  }

  // Método para generar una pregunta CAPTCHA simple
  private generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    this.correctAnswer = num1 + num2;
    this.captchaQuestion = `¿Cuánto es ${num1} + ${num2}?`;
  }

  // Método para verificar si la respuesta del usuario es correcta
  private checkCaptcha() {
    const isCorrect = this.userAnswer === this.correctAnswer;
    this.captchaResolved.emit(isCorrect);
  }
}