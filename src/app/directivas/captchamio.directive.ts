import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCaptchamio]',
  standalone: true
})

export class CaptchamioDirective {

  //@Input() question!: string; // La pregunta del captcha
  //@Input() correctAnswer!: string; // La respuesta correcta del captcha
  //@Output() validation = new EventEmitter<boolean>(); // Evento para emitir si es válido

  //@Input() question: string = '';
  //@Input() correctAnswer: string = '';
  //@Output() validation: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() question: string; // La pregunta del captcha
  @Input() correctAnswer: string; // La respuesta correcta del captcha
  @Output() validation = new EventEmitter<boolean>(); 

  private inputElement: HTMLInputElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Crear un input para que el usuario responda
    this.inputElement = this.renderer.createElement('input');
    this.renderer.setAttribute(this.inputElement, 'placeholder', 'Resuelve el captcha');
    this.renderer.setStyle(this.inputElement, 'margin-left', '10px');
    this.renderer.appendChild(this.el.nativeElement, this.inputElement);
  }

  // Escuchar cuando el usuario escriba en el input
  @HostListener('input', ['$event.target.value'])
  
  onInput(value: string): void {
    // Validar la respuesta
    const isValid = value.trim() === this.correctAnswer;
    this.validation.emit(isValid); // Emitir si es válido o no
    this.renderer.setStyle(
      this.inputElement,
      'border-color',
      isValid ? 'green' : 'red'
    );
  }

  // Agregar la pregunta del captcha como texto
  ngOnInit(): void {
    const questionText = this.renderer.createText(this.question);
    this.renderer.insertBefore(this.el.nativeElement, questionText, this.inputElement);
  }

  validateAnswer(userAnswer: string): void {
    const isValid = userAnswer === this.correctAnswer;
    this.validation.emit(isValid);
  }

  userAnswer: string = '';

  onValidateCaptcha(): void {
    // Compara la respuesta del usuario con la correcta
    const isValid = this.userAnswer === this.correctAnswer;
    this.validation.emit(isValid);
  }
}
