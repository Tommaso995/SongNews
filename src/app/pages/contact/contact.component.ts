import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  formContact: FormGroup;

  tit: string = '';
  email: string = '';
  mess: string = '';

  constructor(){
    this.formContact = new FormGroup({
      titolo: new FormControl(this.tit, [Validators.required, Validators.maxLength(50)]),
      email: new FormControl(this.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      messaggio: new FormControl(this.mess, [Validators.required, Validators.maxLength(5000)])
    })
  }

  invio(){
    this.formContact = new FormGroup({
      titolo: new FormControl(this.tit, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      email: new FormControl(this.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      messaggio: new FormControl(this.mess, [Validators.required, Validators.minLength(4), Validators.maxLength(5000)])
    })
  }

}
