import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  useLetter = false;
  useNumber = false;
  useSymbol = false;

  numbers = '1234567890';
  letters = 'abcdefghijklmnopqrstuvwxyz';
  symbols = '!@#$%^&*()_+';

  onChangeLength(event: Event) {
    return +(event.target as HTMLInputElement).value;
  }
  onButtonClick() {
    let validChars = '';
    let generatedPassword = '';

    if (this.useLetter) {
      validChars += this.letters;
    }
    if (this.useNumber) {
      validChars += this.numbers;
    }
    if (this.useSymbol) {
      validChars += this.symbols;
    }

    for (let i = 0; i < this.length; i++) {
      generatedPassword +=
        validChars[Math.floor(Math.random() * validChars.length)];
    }

    this.password = generatedPassword;
  }

  toggleButton() {
    return !(
      this.length &&
      (this.useLetter || this.useNumber || this.useSymbol)
    );
  }

  onChangeUseLetters() {
    this.useLetter = !this.useLetter;
  }

  onChangeUseNumbers() {
    this.useNumber = !this.useNumber;
  }

  onChangeUseSymbols() {
    this.useSymbol = !this.useSymbol;
  }
}
