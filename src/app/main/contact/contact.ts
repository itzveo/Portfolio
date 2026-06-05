import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  nameValue = signal('');
  mailValue = signal('');
  msgValue = signal('');
  checkboxChecked = signal(false);
  submitted = signal(false);

  nameTouched = signal(false);
  mailTouched = signal(false);
  msgTouched = signal(false);
  ppMsgTouched = signal(false);

  nameValid = computed(() => this.nameValue().trim().length > 0);

  mailValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(this.mailValue().trim());
  });

  msgValid = computed(() => this.msgValue().trim().length > 0);

  formValid = computed(
    () => this.nameValid() && this.mailValid() && this.msgValid() && this.checkboxChecked()
  );

  toggleCheckbox(): void {
    this.checkboxChecked.set(!this.checkboxChecked());
    this.ppMsgTouched.set(true);
  }

  onButtonClick(): void {
    if (this.submitted()) return;
    this.markInvalidFields();
    if (!this.formValid()) return;
    this.submitted.set(true);
    this.sendMail();
  }

  markInvalidFields(): void {
    if (!this.nameValid()) this.nameTouched.set(true);
    if (!this.mailValid()) this.mailTouched.set(true);
    if (!this.msgValid()) this.msgTouched.set(true);
    if (!this.checkboxChecked()) this.ppMsgTouched.set(true);
  }

  sendMail(): void {
    emailjs
      .send(
        'MailService',
        'template_h8pf9b2',
        {
          from_name: this.nameValue().trim(),
          from_email: this.mailValue().trim(),
          message: this.msgValue().trim(),
        },
        'DbCiOn58wNFVqY1FT'
      )
      .then(() => setTimeout(() => this.resetForm(), 2000))
      .catch(() => this.submitted.set(false));
  }

  resetForm(): void {
    this.nameValue.set('');
    this.mailValue.set('');
    this.msgValue.set('');
    this.checkboxChecked.set(false);
    this.nameTouched.set(false);
    this.mailTouched.set(false);
    this.msgTouched.set(false);
    this.ppMsgTouched.set(false);
    this.submitted.set(false);
  }
}
