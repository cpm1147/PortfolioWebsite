import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  constructor(private titleService: Title){
    this.titleService.setTitle('Willie Dong - Contact');
  }
  
  name: string = '';
  email: string = '';
  message: string = '';
  honeypot: string = '';
  isSending = false;
  isSuccess = false;

  getCaptchaToken(): string | null {
  const response = (window as any).grecaptcha?.getResponse();
  return response || null;
  }

  toast = {
  show: false,
  message: '',
  type: ''
  };


showToast(message: string, type: 'success' | 'error' | 'warning') {
  const x = document.getElementById('toast');
  if (!x) return;

  x.innerText = message;

  x.className = '';       
  void x.offsetWidth;  
  x.classList.add(type);

  setTimeout(() => {
    x.classList.remove(type);
  }, 3000);
}
  
  ProcessContact(form: any){
    if (!this.name) {
      this.showToast('Please enter your name', 'warning');
      return;
    }
    if (!this.email) {
      this.showToast('Please enter your email', 'warning');
      return;
    }
    if (!this.message) {
      this.showToast('Please enter a message', 'warning');
      return;
    }
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.showToast('Please fix form errors', 'warning');
      return;
    }

    if (this.honeypot) return;

    const captchaToken = this.getCaptchaToken();
    if (!captchaToken) {
      this.showToast('Please complete the reCAPTCHA', 'warning');
      return;
    }

    this.isSending = true;
    this.isSuccess = false;

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    emailjs.send(
      'service_h79w7fv',
      'template_zzy6v0d',
      templateParams,
      '3rGr33ICJb5O2xFkv'
    ).then(() => {

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });

      this.isSending = false;
      this.isSuccess = true;
      this.showToast('Message sent successfully!', 'success');

      this.name = '';
      this.email = '';
      this.message = '';
      this.honeypot = '';

      form.resetForm();

      (window as any).grecaptcha.reset();
      setTimeout(() => {
        this.isSuccess = false;
      }, 3000);

    }).catch(() => {
      this.isSending = false;
      form.resetForm();
      alert('Something went wrong');
    });
  }
}
